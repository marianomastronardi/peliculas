import { ɵBrowserPlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actores } from 'src/app/models/actores';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  public fg!: FormGroup;
  actor:Actores;
  formValid:boolean = true;

  constructor(private fb:FormBuilder,
    private route:Router) {
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
    if(this.fg.valid){
      //save
      this.route.navigate(['bienvenidos']);
    }else{
      this.formValid = !this.formValid;
      setTimeout(() => {
        this.formValid = !this.formValid;
      }, 2000);
    }
  }

}
