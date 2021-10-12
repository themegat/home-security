import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const _getSensor = createFeatureSelector<AppState>('App');

export const getSensor = createSelector(
  _getSensor,
  (state: AppState) => state.sensor
);
