import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mode } from 'src/app/models/mode.enum';
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
    //this.eventoCreacionNuevaPelicula.emit(this.peliculaNueva);
    this.eventoCreacionNuevaPelicula.emit(Mode.create);
  }

  hacerNuevaPelicula(){
    this.peliculaNueva = new Pelicula();
  }
}
