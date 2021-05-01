import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private dbPath = '/peliculaFire';
  PeliculaRef: AngularFirestoreCollection<Pelicula>;

  constructor(private db: AngularFirestore) { 
    this.PeliculaRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Pelicula> {
    return this.PeliculaRef;
  }

  create(pelicula: Pelicula): any {
    return this.PeliculaRef.add({ ...pelicula });
  }

  update(id: string, data: any): Promise<void> {
    return this.PeliculaRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.PeliculaRef.doc(id).delete();
  }

}
