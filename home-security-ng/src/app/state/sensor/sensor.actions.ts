import { SensorDocument } from './../../documents/sensor.doc';
import { createAction, props } from '@ngrx/store';

const sensorTag = '[Sensors]';

export const Sensors = createAction(
  `${sensorTag}  Sensors`
);

export const SensorsSuccess = createAction(
  `${sensorTag}  Sensors Success`,
  props<{ data: any }>()
);

export const SensorsFailure = createAction(
  `${sensorTag}  Sensors Failure`,
  props<{ error: any }>()
);

// export const init = createAction(`${sensorTag} Initialize Sensors`);

export const setSensor = createAction(`${sensorTag} Set Sensor`,
  props<SensorDocument>());

export const getSensor = createAction(`${sensorTag} Get Sensor`);
