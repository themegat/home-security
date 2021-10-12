import { Injectable } from '@angular/core';
import { DocumentData } from '@google-cloud/firestore';
import { Store } from '@ngrx/store';
import { initializeApp } from 'firebase/app';
import {
  collection,
  CollectionReference,
  connectFirestoreEmulator,
  doc,
  DocumentReference,
  Firestore,
  getFirestore,
  onSnapshot,
  setDoc,
  Unsubscribe,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { SensorActions } from 'src/app/state/action-types';
import { AppState } from 'src/app/state/app.state';
import { FirebaseConfig } from 'src/config/firebase.config';
import { environment } from 'src/environments/environment';

import { SensorDocument } from './../../documents/sensor.doc';
import { FirestoreServiceModels } from './firestore.service.models';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private db: Firestore | any = null;
  private sensorListener: Unsubscribe | any = null;

  isAlarmActive = new BehaviorSubject(false);
  pirSensor = new BehaviorSubject<SensorDocument | null>(null);

  constructor(private store: Store<AppState>) {
    this.init();
  }

  public initializeDB(): void {
    setDoc(this.sensorOne, FirestoreServiceModels.sensorCollection.documents.sensorOne);
  }

  public startListeners(): void {
    this.initializeDB();
    this.listenForAlarmChanges();
  }

  private init(): void {
    initializeApp(FirebaseConfig.config);
    this.db = getFirestore();
    if (!environment.production) {
      connectFirestoreEmulator(this.db, 'localhost', 8080);
      console.log('Firestore running in dev mode');
    }
  }

  private listenForAlarmChanges(): void {
    if (this.sensorListener)
      return;

    this.sensorListener = onSnapshot(doc(this.sensorCollection, this.sensorOne.id), (doc) => {
      const data = doc.data() as SensorDocument;
      if (data) {
        this.isAlarmActive.next(data.isAlarmOn ?? false);
        this.pirSensor.next(data);
        this.store.dispatch(SensorActions.setSensor(data));
      }
    })
  }

  get sensorCollection(): CollectionReference<DocumentData> {
    return collection(this.db, FirestoreServiceModels.sensorCollection.collection);
  }

  get sensorOne(): DocumentReference<DocumentData> {
    return doc(this.sensorCollection, FirestoreServiceModels.sensorCollection.documents.sensorOne.document);
  }
}

export interface AppCollectionReference {
  firestore: Firestore;
  collectionName: string;
}

export interface AppDocumentReference {
  collection: CollectionReference<DocumentData>;
  documentName: string;
}
