import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
  {path: 'bienvenidos', component: BienvenidosComponent},
  {path: 'buscarPelicula', component: BusquedaPeliculaComponent},
  {path: '', component: BienvenidosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'bienvenidos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
