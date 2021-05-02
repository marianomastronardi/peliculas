import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FormsModule } from '@angular/forms';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { environment } from 'src/environments/environment';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ListadoActoresComponent } from './components/listado-actores/listado-actores.component';
import { PaisProfileComponent } from './components/pais-profile/pais-profile.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    BusquedaPeliculaComponent,
    NavbarComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaActorComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    AltaActoresComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    ActorListadoComponent,
    ListadoActoresComponent,
    PaisProfileComponent,
    PeliculasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
