import React, {useEffect, useState} from 'react';
import PersonalInfo from "../Forms/PersonalInfo";
import TicketDirection from "../Forms/TicketDirection";
import FirstClassOnly from "../Forms/FirstClassOnly";
import { TicketConfig, TicketTypes } from './types';

const useTicketOrderWizard = () => {
  const [ticketConfig, setTicketConfig] = useState<TicketConfig>()

  const onTicketSelect = (ticketType: TicketTypes) => {
    fetch(`http://localhost:5000/ticketWizard/${ticketType}`)
    .then(response => response.json())
    .then(data => setTicketConfig(data));
  }

    const defaultState = ticketConfig && ticketConfig?.forms[0];

    const formMapper = {
      PersonalInfo: {component: <PersonalInfo/>},
      TicketDirection: {component: <TicketDirection/>},
      FirstClassOnly: {component: <FirstClassOnly/>}
    };

    const setup = ticketConfig && ticketConfig.forms.map((item)=>({state: item, component: formMapper[item].component}))

    return {defaultState, setup, onTicketSelect}
}

export default useTicketOrderWizard;