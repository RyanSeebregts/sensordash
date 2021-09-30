import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'


import db from '../firebase';
import { ref, child, get, onValue, push } from "firebase/database";
import TextInput from './TextInput';
import Button from './Button';
import colors from '../colors';
const bcryptjs = require('bcryptjs');

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginWindow = styled.div`
  padding: 20px 20px;
  min-width: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const RegisterWindow = styled.div`
  position: relative;
  padding: 20px 20px;
  min-width: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

interface propTypes {
  setLoggedIn: any
}

function LoginPage(props: propTypes) {
  const [loginOpen, setLoginOpen] = useState(true)

  const [users, setUsers] = useState<any[]>([])


  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')


  const [regUsername, setRegUsername] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regError, setRegError] = useState('')

  const [loading, setLoading] = useState(false)
  const [loginLoading, setLoginLoading] = useState(true)

  const [registerDone, setRegisterDone] = useState(false)

  let timer:any = null

  useEffect(() => {
    timer = setTimeout(() => {
      setLoginLoading(false)
    }, 1000)

    const usersRef = ref(db, 'Users/');

    onValue(usersRef, (snapshot:any) => {
      if(snapshot.exists()) {
        console.log(snapshot.val())

        let users = snapshot.val()
        let newUsernames = []

        for (var key in users) {
          let username:string = users[key]
          newUsernames.push(username)
        }
        setUsers(newUsernames)
      }

      
    })

    return () => {
      clearTimeout(timer)
    }
  }, [])



  return (
    <Container>

      {
        loginOpen ?
          <LoginWindow>
          <div style={{fontSize: '25px', fontWeight: 'bold', marginBottom: '20px'}}>Login</div>

          <TextInput
            value={loginUsername}
            setValue={setLoginUsernameHelper}
            type={'text'}
            placeholder={"username"}
          />

          <div style={{height: '20px'}} />

          <TextInput
            value={loginPassword}
            setValue={setLoginPasswordHelper}
            type={'password'}
            placeholder={"password"}
          />

          <div style={{height: '40px', width: '100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          {loginError}
          </div>

          <Button 
            clicked={login}
            value={'login'}
            color={colors.primary}
            textColor={'white'}
          />

          <div onClick={() => setLoginOpen(false)} style={{cursor: 'pointer', marginTop: '10px'}}>register</div>

          {
            loginLoading &&
              <div 
                style={{
                  top: '0px',
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  background: 'black',
                  opacity: 0.6
                }} 
              />
          }
          </LoginWindow>

          :

          <RegisterWindow>
            <div style={{fontSize: '25px', fontWeight: 'bold', marginBottom: '20px'}}>Register</div>

            <TextInput
              value={regUsername}
              setValue={setRegUsernameHelper}
              type={'text'}
              placeholder={"username"}
            />

            <div style={{height: '20px'}} />

            <TextInput
              value={regPassword}
              setValue={setRegPasswordHelper}
              type={'password'}
              placeholder={"password"}
            />

            <div style={{height: '40px', width: '100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            {regError}
            </div>

            <Button 
              clicked={register}
              value={'register'}
              color={colors.primary}
              textColor={'white'}
            />

            <div onClick={() => setLoginOpen(true)} style={{cursor: 'pointer', marginTop: '10px'}}>go to login</div>

            {
              loading &&
                <div 
                  style={{
                    top: '0px',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    background: 'black',
                    opacity: 0.6
                  }} 
                />
            }

            {
              registerDone &&
                <div 
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: '0px',
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '25px',
                    fontWeight: 'bold',
                  }}
                >
                  user registered
                </div>
            }

          </RegisterWindow>
      }

    </Container>
  );

  function setLoginUsernameHelper(e:any) {
    setLoginUsername(e.target.value)
  }
  function setLoginPasswordHelper(e:any) {
    setLoginPassword(e.target.value)
  }

  function setRegUsernameHelper(e:any) {
    setRegUsername(e.target.value)
  }
  function setRegPasswordHelper(e:any) {
    setRegPassword(e.target.value)
  }

  async function login() {
    console.log(users)
    setLoginError('')

    let userCorrect = false

    for(let i = 0; i < users.length; i++) {
      if(users[i].username === loginUsername) {
        let hashLogin = await hashIt(loginPassword, users[i].salt)
        console.log(hashLogin)

        if(hashLogin === users[i].password) {
          userCorrect = true
          props.setLoggedIn(true)
          return
        }
      }
    }

    if(!userCorrect)
      setLoginError('username or password incorrect')
  }

  async function register() {
    setLoading(true)
    setRegError('')

    let usernameUsed = false
    users.forEach((el:any) => {
      if(el.username === regUsername) {
        usernameUsed = true
      }
    })

    if(usernameUsed) {
      setLoading(false)

      setRegError('username used')
      return
    }

    let salt = await getSalt()
    let passHash = await hashIt(regPassword, salt)

    const usersRef = ref(db, 'Users/');

    push(usersRef, {
      username: regUsername,
      password: passHash,
      salt : salt
    });
    setRegisterDone(true)

    timer = setTimeout(() => {
      setLoading(false)
      setLoginOpen(true)
      setRegisterDone(false)
    }, 2000)
  }

  async function getSalt() {
    const salt = await bcryptjs.genSalt(6);
    return salt
  }
  async function hashIt(password:string, salt:any){
    const hashed = await bcryptjs.hash(password, salt);
    return hashed
  }
}

export default LoginPage;


