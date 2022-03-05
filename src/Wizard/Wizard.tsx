import React from 'react'
import Steps from './Steps/Steps';
import { WizardProps } from './types';
import useWizard from './hooks';
import { getComponentsMap } from './helpers';
import { StyledButtonContainer, StyledWizard, StyledWizardButtons } from './StyledWizard';
import { NEXT_BTN_TEXT, PREV_BTN_TEXT } from './consts';

const Wizard = <T extends string>({defaultState, setup}: WizardProps<T>) => {

    const wizardMachine = useWizard({defaultState, setup})
    const components: {[key:string]: JSX.Element} = getComponentsMap(setup)
    const currentComponent: JSX.Element = components[wizardMachine.currentState]
 
    return (
        <StyledWizard>
            <Steps setup={setup}/>
            {currentComponent}
            <StyledButtonContainer>
                <StyledWizardButtons onClick={() => wizardMachine.dispatch("prev")}>{NEXT_BTN_TEXT}</StyledWizardButtons>
                <StyledWizardButtons onClick={() => wizardMachine.dispatch("next")}>{PREV_BTN_TEXT}</StyledWizardButtons>
            </StyledButtonContainer>
        </StyledWizard>
    )
}

export default Wizard
