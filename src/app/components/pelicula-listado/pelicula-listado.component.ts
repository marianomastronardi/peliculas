import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mode } from 'src/app/models/mode.enum';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() listadoDePeliculas:Pelicula[] = [];
  @Input() borrado!:number;
  @Output() eventSendSelectedMovie:EventEmitter<any> = new EventEmitter<any>();
  @Output() eventDelMovie:EventEmitter<any> = new EventEmitter<any>();
  peliculaSeleccionada!: Pelicula;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  cargarPeliculaSeleccionada(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
    this.eventSendSelectedMovie.emit(this.peliculaSeleccionada)
  }

  deleteMovie(pelicula:Pelicula){
    this.eventDelMovie.emit(pelicula);
  }

}
