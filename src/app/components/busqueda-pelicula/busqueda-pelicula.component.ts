import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mode } from 'src/app/models/mode.enum';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { map } from "rxjs/operators";
import { Actores } from 'src/app/models/actores';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {

  listadoDePeliculas: Pelicula[] = [];
  peliculaSeleccionada!: Pelicula;
  bActorTable:boolean = false;
  actorSelected!:Actores | undefined;
  details:boolean = true;

  constructor(private _peliculaService:PeliculaService
    , private route:Router) {
    this._peliculaService
      .getAll()
      .valueChanges()
      /* .pipe(
        map(changes =>
          changes.map((c: any) => {
            console.log('c', c)
            //this.docID = c.payload.doc.id;
            return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          }
          )
        )
      ) */
      .subscribe((data:any) => {
        this.listadoDePeliculas = (data) ? data : []; 
      })
    this.peliculaSeleccionada = new Pelicula();
    this.bActorTable = false;
  }

  ngOnInit(): void {
  }

  nuevaPelicula() {
    this.route.navigate(['/peliculas/alta'])
  }

  selectedMovie(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;    
    this.actorSelected = undefined;
  }

  deleteMovie(pelicula: Pelicula) {
    this._peliculaService.getById(pelicula.id)
    .snapshotChanges()
    .pipe(
      map(changes =>
        changes.map((c: any) => {
          console.log('c', c)
          this._peliculaService.delete(c.payload.doc.id);
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        }
        )
      )
    )
    .subscribe()
  } 

  viewDetails(actor:Actores){
    this.bActorTable = true;
    this.actorSelected = actor;
  }

}
