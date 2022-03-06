import React from 'react'
import { StepsProps } from '../types';
import {StyledWizardStepsCircle, StyledWizardStepsContainer, StyledWizardSteps} from './StyledSteps'

const Steps = <T extends string>({setup, activeStep}: StepsProps<T>) => {
   
    return (
        <StyledWizardStepsContainer>
            {setup.map((value, index) =>{
                const isActive = value.state === activeStep
                return (
                    <StyledWizardSteps key={`wizard-step-${value.state}`}>
                        <StyledWizardStepsCircle isActive={isActive}/>
                    </StyledWizardSteps>
                )
            }
                
            )}
        </StyledWizardStepsContainer>
    )
}

export default Steps