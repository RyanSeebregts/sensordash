import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'

const Container = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  background: transparent;
  border: 2px solid darkgrey;
  border-radius: 5px;
  padding: 5px 7px;
  margin: 0px;
`

interface propTypes {
    value: any
    placeholder: string
    type: string
    setValue: any
}


function TextInput(props:propTypes) {


  return (
    <Container
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.setValue}
    />
  );
}

export default TextInput;