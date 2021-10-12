import * as fromSensor from './sensor.actions';

describe('Sensors', () => {
  it('should return an action', () => {
    expect(fromSensor.Sensors().type).toBe('[Sensor]  Sensors');
  });
});
