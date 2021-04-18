import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoDePeliculas:Pelicula[] = [];
  @Input() borrado!:number;
  @Output() peliculaSeleccionadaEvento:EventEmitter<any> = new EventEmitter<any>();
  @Output() eventDeleteMovie:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionPelicula(pelicula:Pelicula){
    this.peliculaSeleccionadaEvento.emit(pelicula);
  }

  eliminarPelicula(pelicula:Pelicula){
    this.eventDeleteMovie.emit(pelicula);
  }
}
