// @ts-ignore
import styled from 'styled-components'

export const StyledWizardStepsCircle= styled.div `
    width: 20px;
    height: 20px;
    border: 1px solid #1976d2;
    margin: 10px;
    padding: 5px;
    border-radius: 50%;
    transition: background 0.375s ease-in-out;
    background: ${({isActive}:{isActive: boolean}) => isActive? '#1976d2': '#fff'}
`

export const StyledWizardStepsContainer= styled.div `
    display: flex;
    justify-content: center;
`

export const StyledWizardSteps= styled.div `
    margin-top: 10px;
`
