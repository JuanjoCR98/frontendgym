import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { EjerciciosComponent } from './Componentes/ejercicios/ejercicios.component';
import { HomeComponent } from './Componentes/home/home.component';
import { RutinasComponent } from './Componentes/rutinas/rutinas.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "ejercicios", component: EjerciciosComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "rutinas", component:RutinasComponent},
  {path: "**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
