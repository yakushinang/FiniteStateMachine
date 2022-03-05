import {useState} from 'react'
import { MachineArg, FiniteStateMachinesProps } from './types';

const useFiniteStateMachines = <T extends string>({state, transitions: transitionsFromProps}: FiniteStateMachinesProps<T>) => {

  const [currentState, setCurrentState] = useState<string>(state)

  const setState = (newState: string) => {
    if(transitions[newState]){
      setCurrentState(newState)
    }
  }

  const transitions = transitionsFromProps(setState)

  const dispatch = (actionName: string, ...payload: any) => {
    const action = transitions[currentState][actionName];

    if (action) {
      action(...payload);
    }
  }

  return { dispatch,  currentState}
}

export default useFiniteStateMachines;