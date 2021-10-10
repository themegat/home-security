import { BehaviorSubject } from 'rxjs';
import { FirestoreService } from './../../services/firestore-service/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.initializeDB();
    this.firestoreService.startListeners();
  }

  get isPirAlarmActive(): BehaviorSubject<boolean> {
    return this.firestoreService.isAlarmActive;
  }
}
