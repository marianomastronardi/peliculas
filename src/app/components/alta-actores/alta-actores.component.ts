import { ɵBrowserPlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actores } from 'src/app/models/actores';
import { ActorService } from 'src/app/services/actor.service';

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
    private route:Router,
    private _actorService:ActorService) {
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
      'photo': ['', Validators.required],
    })
    this.fg.controls['sexo'].patchValue('Femenino');
  }

  setCountry(pais:any){
    this.actor.pais = pais;
  }

  save(){
    this._actorService.create(this.actor);
    this.route.navigate(['/buscarPelicula']);
  }

}
