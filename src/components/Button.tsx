import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'
import { Bar } from 'react-chartjs-2';

const Container = styled.div`
  padding: 7px 10px;
  border-radius: 5px;
  cursor: pointer;
`

interface propTypes {
    value: string
    color: string

    clicked: any
    textColor?:string
}


function Button(props:propTypes) {


  return (
    <Container
        
        onClick={props.clicked}
        style={{
            background: props.color || 'lightgrey',
            color: props.textColor || 'black'
        }}
    >
        {props.value}
    </Container>
  );
}

export default Button;


