import React from 'react'
// @ts-ignore
import { TextField } from '@mui/material';
// @ts-ignore
import styled from 'styled-components'

const StyledFirstClassOnly = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`

const FirstClassOnly = () => {
  return (
    <StyledFirstClassOnly>
        <h1>First Class only</h1>
        <TextField id="standard-basic" label="Your favorite meal:" variant="standard" />
    </StyledFirstClassOnly>
  )
}

export default FirstClassOnly