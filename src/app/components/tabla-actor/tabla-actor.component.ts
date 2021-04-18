import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actores } from 'src/app/models/actores';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styles: [
  ]
})
export class TablaActorComponent implements OnInit {

  @Output() eventSelectedActor:EventEmitter<any> = new EventEmitter<any>();
  listaActores:Actores[];
  constructor() {
    this.listaActores = [
      {id:'001', nombre:'Denzel', apellido:'Washington', sexo:'Masculino', fechaNacimiento:'20-12-1954', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65yhPObuRy3-OeLcQ6P9GoafxABSkeo4FEA&usqp=CAU'},
      {id:'002', nombre:'Cameron', apellido:'Diaz', sexo:'Femenino', fechaNacimiento:'23-05-1971', foto:'https://media.revistagq.com/photos/5ca5f469d71dd925d8957a38/master/pass/cameron_diaz_2618.jpg'},
      {id:'003', nombre:'Tobin', apellido:'Bell', sexo:'Masculino', fechaNacimiento:'03-02-1937', foto:'https://i0.wp.com/wipy.tv/wp-content/uploads/2020/07/tobin-bell-acepta-que-otro-actor-interprete-a-jigsaw.jpg?fit=1000%2C600&ssl=1'},
      {id:'004', nombre:'Mr', apellido:'Been', sexo:'Masculino', fechaNacimiento:'05-05-1960', foto:'https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip'},
      {id:'005', nombre:'Rachel', apellido:'Mc Adams', sexo:'Femenino', fechaNacimiento:'17-11-1978', foto:'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT421uH56FmX-ktVwWg5VlWyDZyaDs_KgBH-Fxqxx-1NkjcW-ftHb8c6aPFtzMW'}
    ]
   }

  ngOnInit(): void {
  }

  seleccionar(actor:Actores){
    this.eventSelectedActor.emit(actor);
  }
}
