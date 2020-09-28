import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Renter } from './entities/renter';
import { RenterActions, SET_AVAILABLE_RENTERS, GET_RENTER } from './renters.actions';
import * as fromRoot from '../../app.reducer';

export interface RenterState {
    renters: Renter[];
    selectedRenter: Renter;
}

export interface State extends fromRoot.State {
    renters: RenterState;
}

const initialState: RenterState = {
    renters: [],
    selectedRenter: null
};

export function renterReducer(state = initialState, action: RenterActions): RenterState {
    switch (action.type) {
        case SET_AVAILABLE_RENTERS:
            return { ...state, renters: action.payload };
        case GET_RENTER:
            return { ...state, selectedRenter: action.payload };
        default:
            return state;
    }
}

export const getRenterState = createFeatureSelector<RenterState>('renters');

export const getAvailableRenters = createSelector(getRenterState, (state: RenterState) => state.renters);
export const getRenter = createSelector(getRenterState, (state: RenterState) => state.selectedRenter);
