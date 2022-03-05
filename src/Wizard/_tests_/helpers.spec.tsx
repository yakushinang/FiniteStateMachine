import React from "react";
import { getComponentsMap, getTransitions } from "../helpers";

const A = () => (<div></div>);
const setupMock = [
    {state: 'First', component: <A/>},
    {state: 'Second', component: <A/>},
    {state: 'Third', component: <A/>},
];

describe('Wizard/helpers', () => {
    test('should get transitions keys', () => {
        const expectedKeys = ['First','Second','Third'];
        const transitions = getTransitions(setupMock)(jest.fn());
        const keys = Object.keys(transitions);
        expect(keys).toEqual(expectedKeys);
    })

    test('should have only next function in first state', () => {
        const expectedFirst = ['next'];
        const transitions: {[key:string]: any} = getTransitions(setupMock)(jest.fn());
        const firstKeys = Object.keys(transitions.First);
        expect(firstKeys).toEqual(expectedFirst);
    })

    test('should have next and prev function in middle states', () => {
        const expectedMiddle = ['next', 'prev'];
        const transitions: {[key:string]: any} = getTransitions(setupMock)(jest.fn());
        const middleKeys = Object.keys(transitions.Second);
        expect(middleKeys).toEqual(expectedMiddle);
    })

    test('should have only prev function in last state', () => {
        const expectedLast = ['prev'];
        const transitions: {[key:string]: any} = getTransitions(setupMock)(jest.fn());
        const lastKeys = Object.keys(transitions.Third);
        expect(lastKeys).toEqual(expectedLast);
    })
    
    test('should return mapped setup', () => {
        const expectedComponentMap = {
            First: <A/>,
            Second: <A/>,
            Third: <A/>,
        };
        const componentMap = getComponentsMap(setupMock);
        expect(componentMap).toEqual(expectedComponentMap);
    })
})