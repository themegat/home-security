import { setSensorReducer, initialState } from './sensor.reducer';

describe('Sensor Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = setSensorReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
