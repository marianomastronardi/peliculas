import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  @Input() listaPeliculas:Pelicula[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
