import { SensorActions } from 'src/app/state/action-types';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';

@Injectable()
export class SensorEffects {
  constructor(
    private actions$: Actions,
    private fireStoreService: FirestoreService) { }

  initSensors$ = createEffect(() => this.actions$.pipe(
    ofType(SensorActions.initSensors),
    tap(() => {
      this.fireStoreService.startListeners();
    }),
  ), { dispatch: false })

}
