import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { HomeComponent } from './Componentes/home/home.component';
import { CabeceraComponent } from './Componentes/cabecera/cabecera.component';
import { NolimitsComponent } from './Componentes/nolimits/nolimits.component';
import { OptionsnolimitsComponent } from './Componentes/optionsnolimits/optionsnolimits.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { RutinasComponent } from './Componentes/rutinas/rutinas.component';
import { SidebarsocioComponent } from './Componentes/sidebarsocio/sidebarsocio.component';
import { EjerciciosComponent } from './Componentes/ejercicios/ejercicios.component';
import { GaleriaComponent } from './Componentes/galeria/galeria.component';
import { CabeceraEjerciciosComponent } from './Componentes/cabecera-ejercicios/cabecera-ejercicios.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraRutinasComponent } from './Componentes/cabecera-rutinas/cabecera-rutinas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CabeceraComponent,
    NolimitsComponent,
    OptionsnolimitsComponent,
    FooterComponent,
    PerfilComponent,
    RutinasComponent,
    SidebarsocioComponent,
    EjerciciosComponent,
    GaleriaComponent,
    CabeceraEjerciciosComponent,
    CabeceraRutinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
