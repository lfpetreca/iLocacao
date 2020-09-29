import { Action } from '@ngrx/store';

import { Property } from './entities/property';

export const SET_AVAILABLE_PROPERTIES = '[Property] Set Available Properties';
export const GET_PROPERTY = '[Property] Get Property';


export class SetAvailableProperty implements Action {
    readonly type = SET_AVAILABLE_PROPERTIES;

    constructor(public payload: Property[]) { }
}

export class GetProperty implements Action {
    readonly type = GET_PROPERTY;

    constructor(public payload: Property) { }
}

export type PropertyActions = SetAvailableProperty | GetProperty;
