import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SensorActions } from 'src/app/state/action-types';
import { SensorSelectors } from 'src/app/state/selector-types';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sensors$ = [
    this.store.pipe(select(SensorSelectors.getSensor))
  ]

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(SensorActions.initSensors());
  }
}
