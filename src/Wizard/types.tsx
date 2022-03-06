export type WizardProps<T extends string> = {
    defaultState: T;
    setup: Setup<T>[];
}

export type UseWizardProps<T extends string> = {
    defaultState: T;
    setup: Setup<T>[];
}

export type Setup<T extends string> = {
    state: T,
    component: JSX.Element;
}


export type StepsProps<T extends string> = {
    setup: Setup<T>[];
    activeStep: string;
}

export type SetState = React.Dispatch<React.SetStateAction<string>>;