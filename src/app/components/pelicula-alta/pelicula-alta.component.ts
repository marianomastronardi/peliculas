import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actores } from 'src/app/models/actores';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styles: [
  ]
})
export class PeliculaAltaComponent implements OnInit {

  @Input() peliculaEdit!:Pelicula;
  @Output() eventSaveMovie:EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  save(){
    this.eventSaveMovie.emit(this.peliculaEdit);
  }

  addActor(actor:Actores){
    this.peliculaEdit.actores.push(actor);
  }
}
