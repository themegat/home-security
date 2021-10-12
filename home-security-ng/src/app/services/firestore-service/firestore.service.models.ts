import { SensorDocument } from './../../documents/sensor.doc';

export class FirestoreServiceModels {
  static sensorCollection: FirestoreServiceModel = {
    collection: 'sesnors',
    documents: {
      sensorOne: {
        document: 'sensor-1',
        type: 'PIR',
        isAlarmOn: false,
        start: false,
        displayName: 'Patio Sensor'
      }
    }
  }
}

export interface FirestoreServiceModel {
  collection: string;
  documents: {
    sensorOne: SensorDocument
  };
}

