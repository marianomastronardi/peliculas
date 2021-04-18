import { Component, OnInit } from '@angular/core';
import { Mode } from 'src/app/models/mode.enum';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {

  listadoDePeliculas: Pelicula[] = [];
  peliculaSeleccionada!: Pelicula;
  states: any = {};
  borrado!: number;

  constructor() {
    this.listadoDePeliculas = [
      { id: '01', nombre: 'Saw I', tipo: 'terror', fechaDeEstreno: '2021-04-01', cantidadDePublico: 200, fotoPelicula: 'https://images-na.ssl-images-amazon.com/images/I/91im2gYZrrL._SX342_.jpg', actores: [] },
      { id: '02', nombre: 'About Time', tipo: 'amor', fechaDeEstreno: '2020-01-01', cantidadDePublico: 300, fotoPelicula: 'http://3.bp.blogspot.com/-29DpQgGyhtQ/UtmkM1t2m2I/AAAAAAAACCk/VBm4jVsu4rM/s1600/abouttime.jpg', actores: [] },
      { id: '03', nombre: 'Mr Been', tipo: 'comedia', fechaDeEstreno: '2017-04-22', cantidadDePublico: 200, fotoPelicula: 'https://www.ecestaticos.com/imagestatic/clipping/188/97b/18897b37b59ad50a057130c20347ade6.jpg', actores: [] }
    ]

    this.borrado = 1;

    this.states.create = false;
    this.states.edit = false;
    this.states.delete = false;
    this.states.details = false;
    this.peliculaSeleccionada = new Pelicula();
  }

  ngOnInit(): void {
  }

  cargarNuevaPelicula(pelicula: Pelicula) {
    this.listadoDePeliculas.push(pelicula);
    this.changeMode(Mode.details);
  }

  selectedMovie(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
    this.changeMode(Mode.details);
  }

  deleteMovie(pelicula: Pelicula) {
    var ix = this.listadoDePeliculas.indexOf(pelicula);
    if (ix > -1) {
      this.listadoDePeliculas.splice(ix, 1);
    }
    if(this.peliculaSeleccionada == pelicula){
      this.states.details = false;
    }
  } 

  loadAlta(mode: number) {
    this.changeMode(mode);
    this.peliculaSeleccionada = new Pelicula();
  }

  changeMode(mode: number) {
    this.states.create = (mode == Mode.create);
    this.states.edit = (mode == Mode.edit);
    this.states.delete = (mode == Mode.delete);
    this.states.details = (mode == Mode.details);
  }
}
