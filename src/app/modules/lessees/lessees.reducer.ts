import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Lessee } from './entities/lessee';
import { LesseeActions, SET_AVAILABLE_LESSEES, GET_LESSEE } from './lessees.actions';
import * as fromRoot from '../../app.reducer';

export interface LesseeState {
    lessees: Lessee[];
    selectedLessee: Lessee;
}

export interface State extends fromRoot.State {
    lessees: LesseeState;
}

const initialState: LesseeState = {
    lessees: [],
    selectedLessee: null
};

export function lesseeReducer(state = initialState, action: LesseeActions): LesseeState {
    switch (action.type) {
        case SET_AVAILABLE_LESSEES:
            return { ...state, lessees: action.payload };
        case GET_LESSEE:
            return { ...state, selectedLessee: action.payload };
        default:
            return state;
    }
}

export const getLesseState = createFeatureSelector<LesseeState>('lessees');

export const getAvailableLesses = createSelector(getLesseState, (state: LesseeState) => state.lessees);
export const getLessee = createSelector(getLesseState, (state: LesseeState) => state.selectedLessee);
