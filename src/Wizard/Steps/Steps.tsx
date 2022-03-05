import React from 'react'
import { StepsProps } from '../types';
import {StyledWizardStepsCircle, StyledWizardStepsContainer, StyledWizardStepsWizardStep, StyledWizardStepsWizardStepNumber} from './StyledSteps'

const Steps = <T extends string>({setup}: StepsProps<T>) => {
   
    return (
        <StyledWizardStepsContainer>
            {setup.map((value, index) =>
                <StyledWizardStepsWizardStep key={`wizard-step-${value.state}`}>
                    <StyledWizardStepsCircle/>
                    <StyledWizardStepsWizardStepNumber>{index}</StyledWizardStepsWizardStepNumber>
                </StyledWizardStepsWizardStep>
            )}
        </StyledWizardStepsContainer>
    )
}

export default Steps