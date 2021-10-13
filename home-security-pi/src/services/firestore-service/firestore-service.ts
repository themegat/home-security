import { FirebaseConfig } from '../../config/firebase.config';
import { FirestoreModels } from './firestore-model';
import { IFireStoreService } from './firestore-service-interface';
import "reflect-metadata";
import * as admin from 'firebase-admin';

export class FireStoreService implements IFireStoreService {
    private _db: any;
    private models: FirestoreModels;

    constructor() {
        console.log('Construct FireStoreService');
        this.init(true);
        this.models = new FirestoreModels(this.db);
    }

    private init(devmode: boolean = false): void {
        const app = admin.initializeApp(FirebaseConfig.config);
        this._db = app.firestore();
        if (devmode) {
            this.initDev();
        }
    }

    private initDev(): void {
        this.db.settings({
            projectId: 'home-security-e8a82',
            host: "localhost:8080",
            ssl: false
        });
        console.log("App running in dev mode");
    }

    get db(): FirebaseFirestore.Firestore {
        return this._db;
    }

    async isAlarmActive(isActive: boolean): Promise<FirebaseFirestore.WriteResult> {
        return new Promise((resolve, reject) => {
            try {
                const docRef = this.models.controllerDoc.set({
                    sensor: isActive
                });
                resolve(docRef);
            } catch (err) {
                reject(err)
            }
        });
    }
}
