import React from 'react';
import { TicketTypes } from '../types';
import { TICKETS_TYPES } from './consts';
import { StyledTicketButtons, StyledTicketOptionsContainer } from './StyledTicketOptions';
// @ts-ignore
import { Button } from '@mui/material';


type TicketOptionsProps = {
    onTicketSelect: (type:TicketTypes) => void;
}

const TicketOptions = ({onTicketSelect}:TicketOptionsProps) => {
    const onClick = (type:TicketTypes) => {

    }
<Button variant="contained">Contained</Button>
    return (
        <StyledTicketOptionsContainer>
            {TICKETS_TYPES.map( (item)=> {
                // @ts-ignore
                return (<StyledTicketButtons variant="contained" key={item} onClick={() =>onTicketSelect(TicketTypes[item])}>
                    {item}
                </StyledTicketButtons>)
            })}
        </StyledTicketOptionsContainer>
    );
}

export default TicketOptions;