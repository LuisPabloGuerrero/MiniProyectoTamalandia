import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {Routes,RouterModule} from '@angular/router';
import { VentasComponent } from './ventas/ventas.component';

const appRoutes: Routes = 
  [
    {path:"", component:HomeComponent},
    { path: "Catalogo", component: CatalogoComponent}, 
    { path: "Home", component: HomeComponent},
    { path: "Informacion", component: InformacionComponent},
    { path: "Ventas", component: VentasComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformacionComponent,
    CatalogoComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }