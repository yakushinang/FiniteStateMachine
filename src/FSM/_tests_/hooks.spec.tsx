// @ts-ignore
import { renderHook } from '@testing-library/react-hooks'
import hooks from '../hooks'

const transitionsMock = (setState: any) => ({
    First: {
        next: () =>{setState('Second')},
    },
    Second: {
        next: () =>{setState('Third')},
        prev: () =>{setState('Fake State')}
    },
    Third: {
        prev: () =>{setState('Second')}
    }
});

describe('FMS/hooks', () => {
    test('should render hook', () => {
        const state = 'First';     
        const {result} = renderHook(() => hooks({state, transitions: transitionsMock}));
        expect(result.current.currentState).toEqual('First');

        result.current.dispatch('next');
        expect(result.current.currentState).toEqual('Second');

        result.current.dispatch('jump');
        expect(result.current.currentState).toEqual('Second');
    })

    test('should stay on the same state', () => {
        const state = 'First';     
        const {result} = renderHook(() => hooks({state, transitions: transitionsMock}));
        expect(result.current.currentState).toEqual('First');

        result.current.dispatch('next');
        expect(result.current.currentState).toEqual('Second');

        result.current.dispatch('prev');
        expect(result.current.currentState).toEqual('Second');
    })
});