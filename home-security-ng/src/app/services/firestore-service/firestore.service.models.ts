import { DocumentReference } from 'firebase/firestore';
import { DocumentData } from '@google-cloud/firestore';
import { CollectionReference } from 'firebase/firestore';
import { collection, doc, Firestore } from 'firebase/firestore';

export class FirestoreServiceModels {
    private db: Firestore;

    constructor(firestore: Firestore) {
        this.db = firestore;
    }

    get eventsCol(): CollectionReference<DocumentData> {
        return collection(this.db, 'events');
    }

    get testDoc(): DocumentReference<DocumentData> {
        return doc(this.eventsCol, 'test');
    }

    get controllerDoc(): DocumentReference<DocumentData> {
        return doc(this.eventsCol, 'controller');
    }
}