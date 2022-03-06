import React from 'react'
import Steps from './Steps/Steps';
import { WizardProps } from './types';
import useWizard from './hooks';
import { getComponentsMap } from './helpers';
import { StyledButtonContainer, StyledWizard, StyledWizardButtons } from './StyledWizard';
import { NEXT_ACTION, NEXT_BTN_TEXT, PREV_ACTION, PREV_BTN_TEXT } from './consts';

const Wizard = <T extends string>({defaultState, setup}: WizardProps<T>) => {

    const wizardMachine = useWizard({defaultState, setup})
    const components: {[key:string]: JSX.Element} = getComponentsMap(setup)
    const currentComponent: JSX.Element = components[wizardMachine.currentState]
    const availableSteps = wizardMachine.getAvailableMethods()
    
    return (
        <StyledWizard>
            <Steps setup={setup} activeStep={wizardMachine.currentState}/>
            {currentComponent}
            <StyledButtonContainer>
                {availableSteps.includes(PREV_ACTION) ? <StyledWizardButtons variant="contained" onClick={() => wizardMachine.dispatch(PREV_ACTION)}>{PREV_BTN_TEXT}</StyledWizardButtons>:<span/>}
                {availableSteps.includes(NEXT_ACTION) ? <StyledWizardButtons variant="contained" onClick={() => wizardMachine.dispatch(NEXT_ACTION)}>{NEXT_BTN_TEXT}</StyledWizardButtons>:<span/>}
            </StyledButtonContainer>
        </StyledWizard>
    )
}

export default Wizard
