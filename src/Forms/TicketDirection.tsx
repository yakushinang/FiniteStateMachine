import React from 'react'
// @ts-ignore
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
// @ts-ignore
import styled from 'styled-components'

const StyledTicketDirection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`

const TicketDirection = () => {
  return (
    <StyledTicketDirection>
        <h1>Ticket Direction</h1>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="One way" />
          <FormControlLabel control={<Checkbox />} label="Round trip" />
        </FormGroup>
    </StyledTicketDirection>
  )
}

export default TicketDirection