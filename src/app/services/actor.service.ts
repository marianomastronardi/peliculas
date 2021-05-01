import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Actores } from '../models/actores';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private dbPath = '/actorFire';
  ActorRef: AngularFirestoreCollection<Actores>;

  constructor(private db: AngularFirestore) { 
    this.ActorRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Actores> {
    return this.ActorRef;
  }

  create(actor: Actores): any {
    return this.ActorRef.add({ ...actor });
  }

  update(id: string, data: any): Promise<void> {
    return this.ActorRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.ActorRef.doc(id).delete();
  }
}
