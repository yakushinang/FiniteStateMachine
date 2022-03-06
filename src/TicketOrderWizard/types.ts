export type StateOptions = 'PersonalInfo' | 'TicketDirection' | 'FirstClassOnly'

export type TicketConfig = {
    forms: StateOptions[]
} 

export enum TicketTypes {
    Business = 'business',
    First = 'first'
}