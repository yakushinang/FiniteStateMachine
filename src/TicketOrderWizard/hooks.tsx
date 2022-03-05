import React, {useEffect, useState} from 'react';
import FormOne from "../Forms/FormOne";
import FormSecond from "../Forms/FormSecond";
import FormThird from "../Forms/FormThird";
import { TicketConfig, TicketTypes } from './types';

const useTicketOrderWizard = () => {
  const [ticketConfig, setTicketConfig] = useState<TicketConfig>()
  useEffect(()=>{
    fetch(`http://localhost:5000/ticketWizard/${TicketTypes.Business}`)
    .then(response => response.json())
    .then(data => setTicketConfig(data));
  },[])

    const defaultState = ticketConfig && ticketConfig?.forms[0];

    const formMapper = {
      First: {component: <FormOne/>},
      Second: {component: <FormSecond/>},
      Third: {component: <FormThird/>}
    };

    const setup = ticketConfig && ticketConfig.forms.map((item)=>({state: item, component: formMapper[item].component}))

    return {defaultState, setup}
}

export default useTicketOrderWizard;