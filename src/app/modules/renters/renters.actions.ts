import { Action } from '@ngrx/store';

import { Renter } from './entities/renter';

export const SET_AVAILABLE_RENTERS = '[Renter] Set Available Renters';
export const GET_RENTER = '[Renter] Get Renter';


export class SetAvailableRenter implements Action {
    readonly type = SET_AVAILABLE_RENTERS;

    constructor(public payload: Renter[]) { }
}

export class GetRenter implements Action {
    readonly type = GET_RENTER;

    constructor(public payload: Renter) { }
}

export type RenterActions = SetAvailableRenter | GetRenter;
