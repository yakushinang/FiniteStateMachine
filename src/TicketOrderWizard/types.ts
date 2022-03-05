export type StateOptions = 'First' | 'Second' | 'Third'

export type TicketConfig = {
    forms: StateOptions[]
} 

export enum TicketTypes {
    Business = 'business',
    LowCost = 'lowCost'
}