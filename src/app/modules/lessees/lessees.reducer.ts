import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Lessee } from './entities/lessee';
import { LesseeActions, SET_AVAILABLE_LESSEE } from './lessees.actions';
import * as fromRoot from '../../app.reducer';

export interface LesseeState {
    lessees: Lessee[];
}

export interface State extends fromRoot.State {
    lessees: LesseeState;
}

const initialState: LesseeState = {
    lessees: []
};

export function lesseeReducer(state = initialState, action: LesseeActions): LesseeState {
    switch (action.type) {
        case SET_AVAILABLE_LESSEE:
            return { ...state, lessees: action.payload };
        default:
            return state;
    }
}

export const getLesseState = createFeatureSelector<LesseeState>('lessees');

export const getAvailableLesses = createSelector(getLesseState, (state: LesseeState) => state.lessees);
