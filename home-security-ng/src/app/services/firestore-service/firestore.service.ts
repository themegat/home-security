import { Injectable, isDevMode } from '@angular/core';
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, doc, Firestore, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { BehaviorSubject } from 'rxjs';
import { FirebaseConfig } from 'src/config/firebase.config';
import { environment } from 'src/environments/environment';
import { FirestoreServiceModels } from './firestore.service.models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private db: Firestore | any = null;
  private firestoreModels: FirestoreServiceModels | any;

  isAlarmActive = new BehaviorSubject(false);

  constructor() {
    this.init();
  }

  get models(): FirestoreServiceModels {
    return this.firestoreModels;
  }

  public initializeDB(): void {
    setDoc(this.models.controllerDoc, {
      isAlarmActive: false
    });
  }

  public startListeners(): void {
    this.listenForAlarmChanges();
  }

  private init(): void {
    initializeApp(FirebaseConfig.config);
    this.db = getFirestore();
    if (!environment.production) {
      connectFirestoreEmulator(this.db, 'localhost', 8080);
      console.log('Firestore running in dev mode');
    }
    this.firestoreModels = new FirestoreServiceModels(this.db);
  }


  private listenForAlarmChanges(): void {
    onSnapshot(doc(this.models.eventsCol, this.models.controllerDoc.id), (doc) => {
      const data = doc.data();
      if (data && data['isAlarmActive'] !== undefined) {
        this.isAlarmActive.next(data['isAlarmActive']);
      }
    })
  }
}
