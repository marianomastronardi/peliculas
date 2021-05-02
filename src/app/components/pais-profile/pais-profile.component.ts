import { Component, OnInit, Input } from '@angular/core';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-pais-profile',
  templateUrl: './pais-profile.component.html',
  styleUrls: ['./pais-profile.component.css']
})
export class PaisProfileComponent implements OnInit {

  @Input() pais!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
