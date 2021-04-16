import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {

  listadoDePeliculas:Pelicula[] = [];
  peliculaSeleccionada!:Pelicula;

  constructor() {
    this.listadoDePeliculas = [
      {id: '01', nombre:'Saw I', tipo: 'terror', fechaDeEstreno: '2021-04-01', cantidadDePublico:200, fotoPelicula:'https://images-na.ssl-images-amazon.com/images/I/91im2gYZrrL._SX342_.jpg'},
      {id: '02', nombre:'About Time', tipo: 'amor', fechaDeEstreno: '2020-01-01', cantidadDePublico:300, fotoPelicula:'http://3.bp.blogspot.com/-29DpQgGyhtQ/UtmkM1t2m2I/AAAAAAAACCk/VBm4jVsu4rM/s1600/abouttime.jpg'},
      {id: '03', nombre:'Mr Been', tipo: 'comedia', fechaDeEstreno: '2017-04-22', cantidadDePublico:200, fotoPelicula:'https://www.ecestaticos.com/imagestatic/clipping/188/97b/18897b37b59ad50a057130c20347ade6.jpg'}
    ]
   }

  ngOnInit(): void {
  }

  cargarPeliculaSeleccionada(pelicula:Pelicula){
    this.peliculaSeleccionada = pelicula;
    console.info(this.peliculaSeleccionada);
  }

  cargarNuevaPelicula(pelicula:Pelicula){
    console.log('pelicula', pelicula)
    this.listadoDePeliculas.push(pelicula);
    console.log(this.listadoDePeliculas)
  }

}
