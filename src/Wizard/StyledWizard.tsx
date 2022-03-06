// @ts-ignore
import styled from 'styled-components'
// @ts-ignore
import { Button } from '@mui/material';

export const StyledWizard = styled.div`
    background-color: #ffffff;
    width: 80vw;
    height: 70vh;
    position: absolute;
    top: 5vh;
    left: 10vw;
    box-shadow: 0px 0px 4px 1px #c8cdcb;
    position: relative;
`

export const StyledButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    position: absolute;
    bottom: 10px;
    justify-content: center;
    width: 100%;
`

export const StyledWizardButtons = styled(Button)`
    width: 100px;
    height: 30px;
    background-color: rgb(59, 153, 153);
    cursor: pointer;
    margin: auto !important;
`