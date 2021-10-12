import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';

@Injectable()
export class SensorEffects {
  private readonly source = '[Sensors]';
  readonly initSensorAction = `${this.source} Initialize Sensors`

  constructor(
    private actions$: Actions,
    private fireStoreService: FirestoreService) { }

  initSensors$ = createEffect(() => this.actions$.pipe(
    ofType(this.initSensorAction),
    tap(() => {
      console.log('TMLOG');
      this.fireStoreService.startListeners();
    }),
  ), { dispatch: false })
}
