import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { HomeComponent } from './Componentes/home/home.component';

const routes: Routes = [
  {path: "", component:PerfilComponent},
  {path: "**", component:PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
