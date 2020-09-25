import { Action } from '@ngrx/store';

import { Lessee } from './entities/lessee';

export const SET_AVAILABLE_LESSEES = '[Lessee] Set Available Lessees';
export const GET_LESSEE = '[Lessee] Get Lessee';


export class SetAvailableLessee implements Action {
    readonly type = SET_AVAILABLE_LESSEES;

    constructor(public payload: Lessee[]) { }
}

export class GetLessee implements Action {
    readonly type = GET_LESSEE;

    constructor(public payload: any) { }
}

export type LesseeActions = SetAvailableLessee | GetLessee;
