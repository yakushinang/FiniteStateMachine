import { SetState, Setup } from "./types";
import _ from "lodash";



export const getTransitions = <T extends string>(setup: Setup<T>[]) => (setState: SetState ) => {

    const transitions = setup.reduce((acc, item, index) => {

        const next = () => {
            setState(setup[index+1].state)
        }

        const prev = () => {
            setState(setup[index-1].state)
        }

        if (index === 0){
            return {
                ...acc,
                [item.state]: {next}
            } 
        }
        if(index === setup.length - 1){
            return {
                ...acc,
                [item.state]: {prev}
            } 
        }
        return {
            ...acc,
            [item.state]: {next, prev}
        } 
    },{}) 

    return transitions
}

export const getComponentsMap = <T extends string>(setup: Setup<T>[]) => {
    const hashMap =  setup.reduce((acc, item, index) => (
        {
            ...acc,
            [item.state]: item.component
        }
    ),{})
    return hashMap
}
