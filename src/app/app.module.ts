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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CabeceraComponent,
    NolimitsComponent,
    OptionsnolimitsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
