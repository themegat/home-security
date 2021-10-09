import { IFireStoreService } from './firestore-service/firestore-service-interface';
import { Container } from "inversify";
import TYPES from './types';
import { FireStoreService } from './firestore-service/firestore-service';

const container = new Container();
container.bind<IFireStoreService>(TYPES.IFireStoreService).to(FireStoreService);

export { container };

