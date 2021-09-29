import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'
import BarGraph from './BarGraph';
import { CSVLink, CSVDownload } from "react-csv";
import colors from '../colors'
import DownloadScreen from './DownloadScreen';
import Button from './Button';


const colorsArr = [colors.blue, colors.green, colors.red, colors.primary, colors.yellow, colors.purple, colors.black, colors.pink]

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const NavBar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  background: #eeeeee;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
`

const NavContent = styled.div`
  height: 100%;
  width: calc(100% / 3);
  display: flex;
  align-items: center;
`

const WaveContentContainer = styled.div`
    background: #eeeeee;
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WaveContent = styled.div`
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    background: white;
    display: flex;
    flex-shrink: 0;
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: center;
`

const WaveGraphContainer = styled.div`
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    flex-shrink: 0;
`

const CsvButton = styled.div`
  position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    fle-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
        color: white;
        background: ${colors.primary};
    }
 
`
interface propTypes {
    coAverage: number
    coSamples: number[]
    waveSamples: any
    logout: any
    currentTime: Date
    lastUpdated: Date
}


function Dashboard(props:propTypes) {
    const [downloadOpen, setDownloadOpen] = useState(false)

  return (
    <Container>
        <NavBar>
            <NavContent
                style={{
                    justifyContent: 'flex-start',
                    paddingLeft: '20px',
                    fontWeight: 'bold'
                }}
            >
                {`Last updated: ${timeString(props.lastUpdated)}`}
            </NavContent>

            <NavContent
                style={{
                    justifyContent: 'center',
                    fontWeight: 'bold'

                }}
            >
                {`Current time: ${timeString(props.currentTime)}`}
            </NavContent>

            <NavContent
                style={{
                    justifyContent: 'flex-end',
                    paddingRight: '20px'
                }}
            >
                <Button 
                    value={'logout'}
                    clicked={props.logout}
                    color={colors.primary}
                    textColor={'white'}
                />
            </NavContent>
        </NavBar>
        <WaveContentContainer>
            <WaveContent>
                {
                    props.waveSamples.map((prop:any, key:number) => 
                        <div style={{width: 'calc(100% / 4)', height: 'calc(100% / 3)', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <WaveGraphContainer>
                                <BarGraph
                                    title={prop.name}
                                    average={prop.average}
                                    value={prop.samples[0]}
                                    color={colorsArr[key]}
                                />
                            </WaveGraphContainer>
                        </div> 
                    )
                }

                <div style={{width: 'calc(100% / 4)', height: 'calc(100% / 3)', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <WaveGraphContainer>
                        <BarGraph
                            title={'CO2 Graph'}
                            average={props.coAverage}
                            value={props.coSamples[0]}
                            color={colors.primary}
                        />
                    </WaveGraphContainer>
                </div> 

                <div style={{width: 'calc(100% / 4)', height: 'calc(100% / 3)', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        
                    <WaveGraphContainer>
                        <CsvButton 
                            onClick={() => setDownloadOpen(true)}
                        >
                            <div>Download</div>
                            <div>CSV</div>
                        </CsvButton>
                    </WaveGraphContainer>
                </div> 

            </WaveContent>
        </WaveContentContainer>

                {/*
        <BottomContent>
            <COContent>
                <div style={{height: '100%', aspectRatio: '1'}}>
                    <BarGraph
                        title={'CO2 Graph'}
                        average={props.coAverage}
                        value={props.coSamples[0]}
                        color={colors.primary}
                    />
                </div>
            </COContent>

            <COContent>
                <Button onClick={() => setDownloadOpen(true)}>Download CSV</Button>
            </COContent>


        </BottomContent>

                */}
            {
                downloadOpen &&
                    <DownloadScreen 
                        close={() => setDownloadOpen(false)}
                    />
            }
        
        
    </Container>
  );

  function timeString(d: Date) {
    let str = d.toISOString().substring(0, 10);
    return str
  }
}

export default Dashboard;


