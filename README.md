# FiniteStateMachine
 
## DOCUMENTATION

1.git clone https://github.com/yakushinang/FiniteStateMachine.git

2.enter project directory

3.npm install

4.npm start

## SERVER

https://github.com/yakushinang/WizardServer 

API: /ticketWizard/:type 
types: business | lowCost

## Use Example
```
import useFiniteStateMachines from '../FMS/hooks';

const getTransitions = (setState) => {
    const transitions = {
      'On': {
         turnOff: () => setState('Off')
      } 
      'Off': {
         turnOn: () => setState('On')
    }
    return transitions
}

const machine = useFiniteStateMachines<T>({
    state: 'On',
    transitions: getTransitions,
});
 
 ```
 The getTransitions function gets a ```setState``` method for updating the current state value and returns transitions object.
