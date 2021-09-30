import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'
import { Bar } from 'react-chartjs-2';
import TextInput from './TextInput';
import Button from './Button';
import { ref, child, get } from "firebase/database";
import db from '../firebase';
import { CSVDownload } from "react-csv";

const Container = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Background = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.6;
    z-index: 0;
`

const Window = styled.div`
    z-index: 1;
    height: 300px;
    max-height: calc(100% - 100px);
    max-width: calc(100% - 100px);
    width: 500px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`
const Heading = styled.div`
    height: 20%;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

`

const Content = styled.div`
    width: calc(100% - 100px);
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;

`

const ContentBoxes = styled.div`
    width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center
`

const Labels = styled.div`
    margin: 20px 0px;
`

const TextBoxes = styled.div`
    width: calc(100% - 20px);
`

const csvData:any = [
    ["time", "CO2", "NIR", "Clear", "F1 415nm", "F2 445nm", "F3 480nm", "F4 515nm", "F5 555nm", "F6 590nm", "F7 630nm", "F8 680nm"],
];

interface propTypes {
    close: any
}


function DownloadScreen(props:propTypes) {
    const d = new Date()
    const [start, setStart] = useState(d)
    const [end, setEnd] = useState(d)
    const [error, setError] = useState('')

    const [csv, setCsv] = useState<any>(csvData)
    const [downloadCsv, setDownloadCsv] = useState(false)

    return (
        <Container>
            <Background 
                onClick={props.close}
            />
            
            <Window>
                <Heading>Download CSV</Heading>

                <Content>
                    <ContentBoxes>
                        <Labels>from</Labels>
                        <TextBoxes>
                            <TextInput
                                value={getDateString(start)}
                                placeholder={"dd/mm/yy"}
                                type={'date'}
                                setValue={setStartDate}
                            />
                        </TextBoxes>

                    </ContentBoxes>

                    <div style={{width: '40px'}} />

                    <ContentBoxes>
                        <Labels>to</Labels>
                        <TextBoxes>
                            <TextInput
                                value={getDateString(end)}
                                placeholder={"dd/mm/yy"}
                                type={'date'}
                                setValue={setEndDate}

                            />
                        </TextBoxes>

                    </ContentBoxes>

                </Content>

                <div style={{marginTop: '10px'}}>

                    {error}
                </div>

                <div style={{marginTop: '20px', marginBottom: '20px'}}>

                    <Button 
                        value={"download csv"}
                        clicked={() => calculateCSVData()}
                        color={"lightgrey"}
                    />
                </div>
                

            </Window>

            {
                downloadCsv &&
                    <CSVDownload data={csv} target="_blank" filename={"wavedata.csv"} />

            }

        </Container>
    );

    function getDateString(val: Date) {

        let yearStr = val.getFullYear()
        let monthStr:string = `${parseInt(val.getMonth().toString()) + 1}`
        let dayStr:string = val.getDate().toString()

        if( parseInt(monthStr) < 10)
            monthStr = "0" + monthStr
        if( parseInt(dayStr) < 10)
            dayStr = "0" + dayStr

        let finalString =  yearStr+'-'+monthStr+'-'+dayStr

        console.log(finalString)
        return finalString



    }

    function setStartDate(val: any) {
        console.log(end.getFullYear()+'-'+end.getMonth()+'-'+end.getDate())
        let d = new Date(val.target.value)
        setStart(d)
    }
    function setEndDate(val: any) {
        console.log(val.target.value)
        let d = new Date(val.target.value)
        console.log(d)
        setEnd(d)
    }

    function calculateCSVData() {
        const sensorsRef = ref(db, 'Sensors/');
        setDownloadCsv(false)

        if(start > end) {
            setError('start date must be before end date')

            return
        }


        get( sensorsRef ).then((snapshot:any) => {
            if (snapshot.exists()) {
                setError('')

                console.log(snapshot.val())
                let sens = snapshot.val()

                let newCsv:any = [].concat(csvData)
                console.log(newCsv)

                for (var key in sens) {
                    let sensTimeStr = sens[key]["Time"]
                    let str = sensTimeStr.split(',')
                    let senseTime = new Date("20"+str[0])
                    console.log(senseTime)

                    if(senseTime <= end && senseTime >= start) {
                        let co:number = sens[key]["Carbon dioxide"]
                        let nir:number = sens[key]["NIR"] * 100
                        let clear:number = sens[key]["Clear"] * 100
                        let f1:number = sens[key]["F1 415nm"] * 100
                        let f2:number = sens[key]["F2 445nm"] * 100
                        let f3:number = sens[key]["F3 480nm"] * 100
                        let f4:number = sens[key]["F4 515nm"] * 100
                        let f5:number = sens[key]["F5 555nm"] * 100
                        let f6:number = sens[key]["F6 590nm"] * 100
                        let f7:number = sens[key]["F7 630nm"] * 100
                        let f8:number = sens[key]["F8 680nm"] * 100
                        let time:string = sens[key]["Time"]
                        
                        let newRow:any = [
                            time,
                            co,
                            nir,
                            clear,
                            f1,
                            f2,
                            f3,
                            f4,
                            f5,
                            f6,
                            f7,
                            f8
                        ]
                        newCsv.push(newRow)
                    }
                }   
                console.log(newCsv.length)
                if(newCsv.length > 1) {
                    setCsv(newCsv)
                    setDownloadCsv(true)
                }

                else {
                    setError('no data in this time period')
                }
            }

            else {
                setError('server error')

            }
        })
    }
}

export default DownloadScreen;


