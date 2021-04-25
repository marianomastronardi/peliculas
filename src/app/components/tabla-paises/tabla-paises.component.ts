import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() eventSendCountry:EventEmitter<any> = new EventEmitter<any>();
  paises:any[] = []
  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this.paises = this._paisService.getAllPaises()
      .subscribe((data:any) => {
        this.paises = data;
        this.paises = this.paises.slice(1, 6)
      })
  }

  setCountryActor(pais:any):void{
    this.eventSendCountry.emit(pais);
  }
}
