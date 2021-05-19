import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { RutinasComponent } from './Componentes/rutinas/rutinas.component';


const routes: Routes = [
  {path: "", component:PerfilComponent},
  {path: "**", component:PerfilComponent},
  {path: "rutinas", component:RutinasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
