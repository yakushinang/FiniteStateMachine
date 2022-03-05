export type MachineArg = {
    transitions: {[key:string]: any};
    dispatch: (actionName: any, ...payload: any[]) => void;
}

export type FiniteStateMachinesProps<T extends string> = {
    state: T;
    transitions: (setState: React.Dispatch<React.SetStateAction<string>>) => {[key:string]: any};
}