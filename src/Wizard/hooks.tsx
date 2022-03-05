import useFiniteStateMachines from '../FMS/hooks';
import { getTransitions } from './helpers';
import { UseWizardProps } from './types';

const useWizard = <T extends string>({defaultState, setup}: UseWizardProps<T>) => {
    
    const wizardMachine = useFiniteStateMachines<T>({
        state: defaultState,
        transitions: getTransitions(setup),
    });

    return wizardMachine
}

export default useWizard
