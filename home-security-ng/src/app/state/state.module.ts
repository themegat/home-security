import { Sensors } from './sensor/sensor.actions';
import { reducers } from './../reducers/index';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';
import { setSensorReducer } from './sensor/sensor.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule, EffectSources, EffectsRootModule, EFFECTS_ERROR_HANDLER } from '@ngrx/effects';
import { SensorEffects } from './sensor/sensor.effects';
import { SensorActions } from './action-types';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([SensorEffects]),
    // EffectsModule.forFeature([SensorEffects]),
    StoreModule.forFeature('App', setSensorReducer)
  ],
  providers: [
    FirestoreService,
    // EffectsRootModule,
    // EffectSources,
  ]
})
export class StateModule { }
