import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoTamalesService {

  constructor() { }
  CatalogoTamales = 
  [
    { Nombre: "Norteño",    Relleno: "Carne de Puesto",  Precio: 10 },
    { Nombre: "Norteño",    Relleno: "Queso con rajas",  Precio: 10 },
    { Nombre: "Norteño",    Relleno: "Frijoles",         Precio: 10 },
    { Nombre: "Norteño",    Relleno: "Pollo",            Precio: 10 },
    { Nombre: "Norteño",    Relleno: "Chicharron",       Precio: 10 },
    { Nombre: "Veracruzano",Relleno: "Carne de Puesto ", Precio: 10 },
    { Nombre: "Veracruzano",Relleno: "Queso con rajas",  Precio: 10 },
    { Nombre: "Veracruzano",Relleno: "Frijoles",         Precio: 10 },
    { Nombre: "Veracruzano",Relleno: "Pollo",            Precio: 10 },
    { Nombre: "Veracruzano",Relleno: "Chicharron",       Precio: 10 },
    { Nombre: "Borracho",   Relleno: "Carne de Puesto ", Precio: 10 },
    { Nombre: "Borracho",   Relleno: "Queso con rajas",  Precio: 10 },
    { Nombre: "Borracho",   Relleno: "Frijoles",         Precio: 10 },
    { Nombre: "Borracho",   Relleno: "Pollo",            Precio: 10 },
    { Nombre: "Borracho",   Relleno: "Chicharron",       Precio: 10 }
  ];
  //declaracion de la funcion que regresa los usuarios
  getTamales()
  {
    console.log(this.CatalogoTamales);
    return this.CatalogoTamales;
  }
}
