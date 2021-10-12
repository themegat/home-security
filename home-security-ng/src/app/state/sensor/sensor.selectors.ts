import { SensorDocument } from './../../documents/sensor.doc';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getSensor = createSelector(
  (state: AppState) => state.sensor,
  (sensor: SensorDocument) => sensor
);
