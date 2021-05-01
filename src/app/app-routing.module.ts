import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';

const routes: Routes = [
  {path: 'bienvenidos', component: BienvenidosComponent},
  {path: 'buscarPelicula', component: BusquedaPeliculaComponent},
  {path: 'altaActor', component: AltaActoresComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent},
  {path: 'actor/actorPelicula', component: ActorPeliculaComponent},
  {path: '', component: BienvenidosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'bienvenidos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
