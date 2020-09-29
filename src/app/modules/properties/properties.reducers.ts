import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Property } from './entities/property';
import { PropertyActions, SET_AVAILABLE_PROPERTIES, GET_PROPERTY } from './properties.actions';
import * as fromRoot from '../../app.reducer';

export interface PropertyState {
    properties: Property[];
    selectedProperty: Property;
}

export interface State extends fromRoot.State {
    properties: PropertyState;
}

const initialState: PropertyState = {
    properties: [],
    selectedProperty: null
};

export function propertyReducer(state = initialState, action: PropertyActions): PropertyState {
    switch (action.type) {
        case SET_AVAILABLE_PROPERTIES:
            return { ...state, properties: action.payload };
        case GET_PROPERTY:
            return { ...state, selectedProperty: action.payload };
        default:
            return state;
    }
}

export const getPropertyState = createFeatureSelector<PropertyState>('properties');

export const getAvailableProperties = createSelector(getPropertyState, (state: PropertyState) => state.properties);
export const getProperty = createSelector(getPropertyState, (state: PropertyState) => state.selectedProperty);
