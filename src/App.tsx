import React from 'react';
import TicketOrderWizard from './TicketOrderWizard/TicketOrderWizard';
import { StyledApp } from './StyledApp';

const App = () => {
  return (
    <StyledApp>
      <h1>Ticket to the Moon</h1>
      <p>welcome to space flight ticked order!</p>
      <TicketOrderWizard/>
    </StyledApp>
  );
}

export default App;
