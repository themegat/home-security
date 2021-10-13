export interface IFireStoreService {
    isAlarmActive(isActive: boolean): Promise<FirebaseFirestore.WriteResult>;
}