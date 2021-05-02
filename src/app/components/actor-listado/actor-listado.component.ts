import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actores } from 'src/app/models/actores';
import { Pelicula } from 'src/app/models/pelicula';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  peliculaDetail!:Pelicula;
  @Input() listaActores!:Actores[];
  @Output() eventActorDetail:EventEmitter<Actores> = new EventEmitter<Actores>();
  @Output() eventActorAdd:EventEmitter<Actores> = new EventEmitter<Actores>();
  @Output() eventActorDel:EventEmitter<Actores> = new EventEmitter<Actores>();
  @Input() details!:boolean;

  constructor(private _actorService:ActorService) {

   }

  ngOnInit(): void {
    /* this._actorService.getAll()
      .valueChanges()
      .subscribe((data:any) => {
        this.listaActores = data ? data : [];
      }) */ 
  }

  viewDetails(actor:Actores){
    this.eventActorDetail.emit(actor);
  }

  seleccionar(actor:Actores){
    this.eventActorAdd.emit(actor);
  }

  quitar(actor:Actores){
    this.eventActorDel.emit(actor);
  }

}
