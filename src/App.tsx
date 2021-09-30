import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'

import db from './firebase';
import { ref, child, get, onValue } from "firebase/database";
import axios from 'axios'

const url = "https://sensordash.000webhostapp.com/index.php"

interface wavType {
  name: string
  samples: number[]
  average: number
}

const waveSampleTemp:wavType[] = [
  {
    name: '415nm',
    samples: [],
    average: 0,
  },
  {
    name: '445nm',
    samples: [],
    average: 0,
  },
  {
    name: '480nm',
    samples: [],
    average: 0,
  },
  {
    name: '515nm',
    samples: [],
    average: 0,
  },
  {
    name: '555nm',
    samples: [],
    average: 0,
  },
  {
    name: '590nm',
    samples: [],
    average: 0,
  },
  {
    name: '630nm',
    samples: [],
    average: 0,
  },
  {
    name: '680nm',
    samples: [],
    average: 0,
  },
  {
    name: 'Clear',
    samples: [],
    average: 0,
  },
  {
    name: 'NIR',
    samples: [],
    average: 0,
  },
]

function App() {
  const d = new Date()
  const [loggedIn, setLoggedIn] = useState(false)

  const [coSamples, setCoSamples] = useState<number[]>([])
  const [coAverage, setCoAverage] = useState<number>(0)

  const [waveSamples, setWaveSamples] = useState(waveSampleTemp)
  const [largestWave, setLargestWave] = useState(0)


  const [lastUpdated, setLastUpdated] = useState('')
  const [currentTime, setCurrentTime] = useState(d)

  const [serverOnline, setServerOnline] = useState(false)


  useEffect(() => {
    const sensorsRef = ref(db, 'Sensors/');

    onValue(sensorsRef, async (snapshot:any) => {
      if (snapshot.exists()) {
        let sens = snapshot.val()

        let cnt = 0

        let blank:number[] = []
        let newCoSamples = blank.concat(coSamples)

        let blank2:wavType[] = []
        let newWaves = blank2.concat(waveSamples)

        for (var key in sens) {
          
          if(cnt === 10)
            break

          if(cnt === 0) {

            let lastTime = getTime(sens[key]["Time"])
            console.log(lastTime)
            setLastUpdated(lastTime)
          }
          let newCo:number = sens[key]["Carbon dioxide"]
          newCoSamples.push( newCo )


          newWaves[0].samples.push(sens[key]["F1 415nm"] ) 
          newWaves[1].samples.push(sens[key]["F2 445nm"] ) 
          newWaves[2].samples.push(sens[key]["F3 480nm"] ) 
          newWaves[3].samples.push(sens[key]["F4 515nm"] ) 
          newWaves[4].samples.push(sens[key]["F5 555nm"] ) 
          newWaves[5].samples.push(sens[key]["F6 590nm"] ) 
          newWaves[6].samples.push(sens[key]["F7 630nm"] ) 
          newWaves[7].samples.push(sens[key]["F8 680nm"] ) 
          newWaves[8].samples.push(sens[key]["Clear"] ) 
          newWaves[9].samples.push(sens[key]["NIR"] ) 
          
          cnt++
        }
        setWave(newWaves)

        let sampleMax = largestWave
        newWaves.forEach((prop:any, index:any) => {
          prop.samples.forEach((el:any, key:any) => {
            if(el > sampleMax)
              sampleMax = el
          })
        })

        setLargestWave(sampleMax)

        setCo(newCoSamples)
      } else {
        console.log("No data available");
      }

      updateCurrentTime()

      checkServer()
    })


    

  }, [])

  return (
    
      !loggedIn ? 
        <LoginPage
          setLoggedIn={setLoggedIn}
        />

        :

        <Dashboard 
          coAverage={coAverage}
          coSamples={coSamples}
          waveSamples={waveSamples}
          logout={logout}
          currentTime={currentTime}
          lastUpdated={lastUpdated}

          largestWave={largestWave}

          serverOnline={serverOnline}
        />
  );

  async function checkServer() {
    /*
    let resp = await axios({
      method: 'get',
      url,
      headers: { 
        "content-type": 'text/html',
        "Access-Control-Allow-Origin": "*"
      },
  })  
  */
    fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
      console.log(json)
      if(json.status === 'online')
        setServerOnline(true)
      else 
        setServerOnline(false)
    })
    .catch(err => {
      setServerOnline(false)
    })
  
    /*
    if(resp === true.)
    else
    */
    
    return setTimeout(checkServer, 120000);
  }

  function updateCurrentTime() {
    let d = new Date()
    setCurrentTime(d)

    return setTimeout(updateCurrentTime, 1000);
  }

  function getTime(d: string) {
    let str = d.split(',')

    let timeStr = str[1].split('+')
    let senseTime = new Date("20"+str[0])

    return senseTime.toISOString().substring(0, 10) + "  at  " + timeStr[0]
  }

  function logout() {
    setLoggedIn(false)
  }

  function setCo(arr:number[]) {
    let total:number = 0;
    arr.forEach((el:number) => {
      total = total + el 
    })

    let avg = total / arr.length

    setCoSamples(arr)
    setCoAverage(avg)

  }

  function setWave(arr:wavType[]) {
    let avg:number[] = [0,0,0,0,0,0,0,0];

    arr.forEach((el:wavType, index:number) => {
      let total = 0
      el.samples.forEach((num:number, index:number) => {
        total = total + num
      })
      avg[index] = total/el.samples.length
    })

    let blank:wavType[] = []
    let newWaves = blank.concat(arr)

    for(let i = 0; i < newWaves.length; i++) {
      newWaves[i].average = avg[i]
    }

    setWaveSamples(newWaves)

  }
}

export default App;


