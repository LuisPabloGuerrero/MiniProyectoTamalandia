import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CatalogoTamalesService } from '../catalogo-tamales.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CatalogoTamalesComponent = [];

  constructor(public CatalogoTamalesService: CatalogoTamalesService) {
     console.log("hola");
     this.CatalogoTamalesComponent = this.CatalogoTamalesService.getTamales();
     console.log(this.CatalogoTamalesService.getTamales());
   }
  ngOnInit() {
  }
  Redirect()
  {
    console.log("hola");
  }
}
