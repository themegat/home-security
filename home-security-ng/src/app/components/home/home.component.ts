import { BehaviorSubject } from 'rxjs';
import { FirestoreService } from './../../services/firestore-service/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public firestoreService: FirestoreService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log('Load');
    // this.firestoreService.initializeDB();
    // this.firestoreService.startListeners();
    this.store.dispatch({ type: '[Sensors] Initialize Sensors' });
  }

  get isPirAlarmActive(): BehaviorSubject<boolean> {
    return this.firestoreService.isAlarmActive;
  }
}
