import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actores } from 'src/app/models/actores';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  public fg!: FormGroup;
  actor:Actores;
  constructor(private fb:FormBuilder) {
    this.actor = new Actores();
   }

  ngOnInit(): void {
    this.fg = this.fb.group({
      'id_actor': ['', [Validators.required]],
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'fechaNacimiento': ['', [Validators.required]],
      'sexo': ['', Validators.required],
      'country': ['', Validators.required],
    })
    this.fg.controls['sexo'].patchValue('Femenino');
  }

  setCountry(pais:any){
    this.actor.pais = pais.name;
  }

  save(){
    console.log(this.actor)
    console.log(this.fg)
  }

}
