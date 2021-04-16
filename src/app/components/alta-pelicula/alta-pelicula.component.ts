import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

   peliculaNueva!:Pelicula;
   @Output() eventoCreacionNuevaPelicula:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  guardarNuevaPelicula(){
    console.log('guardarNuevaPelicula',this.peliculaNueva)
    this.eventoCreacionNuevaPelicula.emit(this.peliculaNueva);

  }

  hacerNuevaPelicula(){
    this.peliculaNueva = new Pelicula();
  }
}
