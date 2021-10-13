import { DocumentData } from '@google-cloud/firestore';

export class FirestoreModels {
    private db: FirebaseFirestore.Firestore;

    constructor(firestore: FirebaseFirestore.Firestore) {
        this.db = firestore;
    }

    get eventsCol(): FirebaseFirestore.CollectionReference<DocumentData> {
        return this.db.collection('events');
    }

    get controllerDoc(): FirebaseFirestore.DocumentReference<DocumentData> {
        return this.eventsCol.doc('controller');
    }
}