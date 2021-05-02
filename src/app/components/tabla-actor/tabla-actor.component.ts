import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Actores } from 'src/app/models/actores';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styles: [
  ]
})
export class TablaActorComponent implements OnInit {

  @Input() actor!:Actores;
  constructor() {
    
   }

  ngOnInit(): void {
  }
}
