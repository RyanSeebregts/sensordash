import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'
import { Bar } from 'react-chartjs-2';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface propTypes {
    title: string
    average: number
    value: number
    color: string
}


function BarGraph(props:propTypes) {


  return (
    <Container>
        <Bar 
            data={
                {
                    labels: ['average', 'current'],
                    datasets: [{
                        backgroundColor: ['lightgrey', props.color],
                        data: [
                            props.average,
                            props.value
                        ]
                    }]
                }
            } 
            options={
                {
                    maintainAspectRatio: false,
                    plugins:{   
                        legend: {
                          display: false
                        },
                        title: {
                            display: true,
                            text: props.title   
                        }
                    },
                }
            } 
            width={100} 
            height={100}
        />
    </Container>
  );
}

export default BarGraph;


