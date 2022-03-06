import React from 'react';
import Wizard from '../Wizard/Wizard';
import useTicketOrderWizard from './hooks';
import { StyledMoonLogo } from './StyledTicketOrderWizard';
import TicketOptions from './TicketOptions/TicketOptions';
import { StateOptions } from './types';

const TicketOrderWizard = () => {
 
  const { defaultState, setup, onTicketSelect } = useTicketOrderWizard()

  return (
    <>
      <TicketOptions onTicketSelect={onTicketSelect}/>
      {defaultState && setup ? 
        <Wizard<StateOptions> defaultState={defaultState} setup={setup}/> 
        :
        <StyledMoonLogo src='/moon.jpg' />}
    </>
  );
}

export default TicketOrderWizard;