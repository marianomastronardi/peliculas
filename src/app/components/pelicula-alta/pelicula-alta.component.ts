import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actores } from 'src/app/models/actores';
import { Pelicula } from 'src/app/models/pelicula';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styles: [
  ]
})
export class PeliculaAltaComponent implements OnInit {

  peliculaEdit!:Pelicula;
  details:boolean = false;
  listaActores!:Actores[];
  @Output() eventSaveMovie:EventEmitter<any> = new EventEmitter<any>();
  public formGroup!: FormGroup;

  constructor(private fb:FormBuilder,
    private _peliculaService:PeliculaService,
    private route:Router,
    private _actorService:ActorService) { 
    this.peliculaEdit = new Pelicula();
    this._actorService.getAll()
    .valueChanges()
    .subscribe((data:any) => {
      this.listaActores = data ? data : [];
    })
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'id': ['', [Validators.required]],
      'title': ['', Validators.required],
      'fechaDeEstreno': ['', [Validators.required]],
      'photo': ['', Validators.required],
      'people': ['', [Validators.required, Validators.min(0), Validators.max(3000000)]],
      'gender': ['', Validators.required],
    })
    console.log(this.formGroup)
  }

  save(){
    this._peliculaService.create(this.peliculaEdit);
    this.route.navigate(['/buscarPelicula'])
  }

  deleteActor(actor:Actores){
    let idx:number = this.peliculaEdit.actores.findIndex(value => value.id == actor.id);
    this.peliculaEdit.actores.splice(idx,1);
  }

  addActor(actor:Actores){
    this.peliculaEdit.actores.push(actor);
  }
}
