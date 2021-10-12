import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SensorEffects } from './sensor.effects';

describe('SensorEffects', () => {
  let actions$: Observable<any>;
  let effects: SensorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SensorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SensorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
