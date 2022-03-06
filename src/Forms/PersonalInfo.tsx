import React from 'react'
// @ts-ignore
import { TextField  } from '@mui/material';
// @ts-ignore
import styled from 'styled-components'


const StyledPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`

const PersonalInfo = () => {
  return (
    <StyledPersonalInfo>
        <h1>Personal Information</h1>
        <TextField id="standard-basic" label="Full name:" variant="standard" />
        <TextField id="standard-basic" label="ID:" variant="standard" />
    </StyledPersonalInfo>
  )
}

export default PersonalInfo