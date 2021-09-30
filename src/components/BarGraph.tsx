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
    min?: number
    max?: number
}


function BarGraph(props:propTypes) {


  return (
    <Container>
        <Bar 
            data={
                {
                    labels: ['current', 'average'],
                    datasets: [{
                        backgroundColor: [props.color, 'lightgrey'],
                        data: [
                            props.value,
                            props.average
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
                    scales: {
                        y: {
                            min: props.min || 0,
                            max: props.max || undefined   
                        }
                    }
                }
            } 
            width={100} 
            height={100}
        />
    </Container>
  );
}

export default BarGraph;


