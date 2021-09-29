import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'

import db from './firebase';
import { ref, child, get, onValue } from "firebase/database";

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

  const [lastUpdated, setLastUpdated] = useState(d)
  const [currentTime, setCurrentTime] = useState(d)

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

          newWaves[0].samples.push(sens[key]["F1 415nm"] * 100) 
          newWaves[1].samples.push(sens[key]["F2 445nm"] * 100) 
          newWaves[2].samples.push(sens[key]["F3 480nm"] * 100) 
          newWaves[3].samples.push(sens[key]["F4 515nm"] * 100) 
          newWaves[4].samples.push(sens[key]["F5 555nm"] * 100) 
          newWaves[5].samples.push(sens[key]["F6 590nm"] * 100) 
          newWaves[6].samples.push(sens[key]["F7 630nm"] * 100) 
          newWaves[7].samples.push(sens[key]["F8 680nm"] * 100) 
          newWaves[8].samples.push(sens[key]["Clear"] * 100) 
          newWaves[9].samples.push(sens[key]["NIR"] * 100) 

          
          cnt++
        }
        setWave(newWaves)

        setCo(newCoSamples)
      } else {
        console.log("No data available");
      }
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
        />
  );

  function getTime(d: string) {
    let str = d.split(',')
    let senseTime = new Date("20"+str[0])
    return senseTime
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


