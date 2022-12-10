import React from 'react'
import Stack from '../../elem/Stack'
import logo from "../../asset/logo192.png"
import styled from 'styled-components'
import Wrapper from '../../elem/Wrapper'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <Fragment>
    {/* align, justify, direction */}
    <Stack justify="flex-start" align="flex-start" direction="column">
      <h1>hanghae99.dev</h1>
      <Stack justify="flex-start"align="center" direction="row">
      <Img src={logo}/>
      <Wrapper mg="20px 0">
        <Wrapper><span>Written by rtan</span></Wrapper>
        <Wrapper><a href="https://github.com/mugyeol"><span>GitHub</span></a></Wrapper>
      </Wrapper>
      </Stack> 
    </Stack>
    </Fragment>
  )
}

export default Profile

const Img = styled.img`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 20px;
`
const Fragment = styled.div`

span{
  font-size:13px;
}
h1{
  margin-top: 40px;
  font-size: 35px;
}

`
