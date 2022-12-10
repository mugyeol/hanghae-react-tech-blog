import React from 'react'
import Stack from '../../elem/Stack'
import logo from "../../asset/logo192.png"
import styled from 'styled-components'

const Profile = () => {
  return (
    //align, justify, direction
    <Stack justify="flex-start" align="flex-start" direction="column">
      <Stack>
      <h1>hanghae99.dev</h1>
      </Stack>
      <Stack direction="row">
      <Img src={logo}/>
      <div>
        <div>name</div>
        <div>github</div>
      </div>
      </Stack> 
    </Stack>
  )
}

export default Profile

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`
