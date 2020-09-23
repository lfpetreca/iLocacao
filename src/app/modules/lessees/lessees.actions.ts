import { Action } from '@ngrx/store';

import { Lessee } from './entities/lessee';

export const SET_AVAILABLE_LESSEE = '[Lessee] Set Available Lessee';


export class SetAvailableLessee implements Action {
    readonly type = SET_AVAILABLE_LESSEE;

    constructor(public payload: Lessee[]) { }
}

export type LesseeActions = SetAvailableLessee;
