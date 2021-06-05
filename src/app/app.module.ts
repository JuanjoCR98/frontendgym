import { LOCALE_ID, NgModule } from '@angular/core';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CabeceraRutinasComponent } from './Componentes/cabecera-rutinas/cabecera-rutinas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilEmpleadoComponent } from './Componentes/empleado/perfil-empleado/perfil-empleado.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { MenuejerciciosComponent } from './Componentes/menusocio/menuejercicios/menuejercicios.component';
import { MenurutinasComponent } from './Componentes/menusocio/menurutinas/menurutinas.component';
import { MenuperfilComponent } from './Componentes/menusocio/menuperfil/menuperfil.component';
import { HeaderusuarioComponent } from './Componentes/headerusuario/headerusuario.component';
import { MenuperfilempleadoComponent } from './Componentes/menuempleado/menuperfilempleado/menuperfilempleado.component';
import { MenusocioempleadoComponent } from './Componentes/menuempleado/menusocioempleado/menusocioempleado.component';
import { MenuempleadoempleadoComponent } from './Componentes/menuempleado/menuempleadoempleado/menuempleadoempleado.component';
import { SocioEmpleadoComponent } from './Componentes/empleado/socio-empleado/socio-empleado.component';

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
    CabeceraRutinasComponent,
    PerfilEmpleadoComponent,
    MenuejerciciosComponent,
    MenurutinasComponent,
    MenuperfilComponent,
    HeaderusuarioComponent,
    MenuperfilempleadoComponent,
    MenusocioempleadoComponent,
    MenuempleadoempleadoComponent,
    SocioEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"},
  {provide:HTTP_INTERCEPTORS,useClass:EnviarTokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
