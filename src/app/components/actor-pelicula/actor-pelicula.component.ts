import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actores } from 'src/app/models/actores';
import { Pelicula } from 'src/app/models/pelicula';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  listadoActores!: Actores[];
  selectedActor!: Actores;
  moviesSelectedActor: Pelicula[] = [];
  movies: Pelicula[] = [];
  
  constructor(private route: Router,
    private _actorService: ActorService,
    private _peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this._actorService.getAll()
      .valueChanges()
      .subscribe((data: any) => {
        this.listadoActores = data ? data : [];
      })
  }

  nuevoActor() {
    this.route.navigate(['/altaActor']);
  }

  actorSeleccionado(actor: Actores) {
    this.moviesSelectedActor = [];
    this.movies = [];
    this.selectedActor = actor;
    console.log('select',actor)
    this._peliculaService.getAll()
      .valueChanges()
      .subscribe((data: any) => {
        this.movies = data ? data : [];
        this.movies.forEach((pelicula: Pelicula, i: number) => {
          console.log('pelicula', pelicula)
          let a = pelicula.actores.find((actor: Actores) => actor.id == this.selectedActor.id)
          console.log('actor',a)
          if (a != undefined) this.moviesSelectedActor.push(pelicula)
        }
        );
      })
  }
}
