import React from 'react';
import Wizard from '../Wizard/Wizard';
import useTicketOrderWizard from './hooks';
import { StateOptions } from './types';

const TicketOrderWizard = () => {
 
  const {defaultState, setup} = useTicketOrderWizard()
  return (
    <>
      {defaultState && setup && <Wizard<StateOptions> defaultState={defaultState} setup={setup}/>}
    </>
  );
}

export default TicketOrderWizard;