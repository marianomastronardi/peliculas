import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actores } from 'src/app/models/actores';
import { ActorService } from 'src/app/services/actor.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css']
})
export class ListadoActoresComponent implements OnInit {

  @Input() listadoActores!:Actores[];
  @Output() eventSelectedActor:EventEmitter<Actores> = new EventEmitter<Actores>();
  constructor(private _actorService:ActorService) { }

  ngOnInit(): void {
  }

  cargarActorSeleccionado(actor:Actores){
    this.eventSelectedActor.emit(actor);
  }

  deleteActor(actor:Actores){
    this._actorService.getById(actor.id)
    .snapshotChanges()
    .pipe(
      map(changes =>
        changes.map((c: any) => {
          console.log('c', c)
          this._actorService.delete(c.payload.doc.id);
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        }
        )
      )
    )
    .subscribe()

  }
}
