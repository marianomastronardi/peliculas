import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoDePeliculas:Pelicula[] = [];
  @Output() peliculaSeleccionadaEvento:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionPelicula(pelicula:Pelicula){
    console.info('pelicula', pelicula)
    this.peliculaSeleccionadaEvento.emit(pelicula);
  }

}
