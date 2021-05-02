import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Actores } from '../models/actores';
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

  getById(id:string): AngularFirestoreCollection<Pelicula> {
    return  this.db.collection(this.dbPath, ref => ref.where('id', '==', id));
  }

  getMovieByActor(actor:Actores): AngularFirestoreCollection<Pelicula> {
    return  this.db.collection(this.dbPath, ref => ref.where('actores', '==', actor));
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
