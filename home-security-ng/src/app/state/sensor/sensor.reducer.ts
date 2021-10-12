import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

import { SensorActions } from '../action-types';

export const initialState: AppState = {
  sensor: {}
};

export const setSensorReducer = createReducer(
  initialState,
  on(SensorActions.setSensor, (state, action) => {
    return {
      sensor: action
    }
  })
);
