import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/auth/login/login.component';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { EjerciciosComponent } from './Componentes/ejercicios/ejercicios.component';
import { EmpleadoEmpleadoComponent } from './Componentes/empleado/empleado-empleado/empleado-empleado.component';
import { PerfilEmpleadoComponent } from './Componentes/empleado/perfil-empleado/perfil-empleado.component';
import { RutinaEmpleadoComponent } from './Componentes/empleado/rutina-empleado/rutina-empleado.component';
import { SocioEmpleadoComponent } from './Componentes/empleado/socio-empleado/socio-empleado.component';
import { HomeComponent } from './Componentes/home/home.component';
import { RutinasComponent } from './Componentes/rutinas/rutinas.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "ejercicios", component: EjerciciosComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "rutinas", component:RutinasComponent},
  {path: "perfilempleado", component:PerfilEmpleadoComponent},
  {path: "socioempleado", component:SocioEmpleadoComponent},
  {path: "empleadoempleado", component:EmpleadoEmpleadoComponent},
  {path: "rutinaempleado", component:RutinaEmpleadoComponent},
  {path: "login", component:LoginComponent},
  {path: "**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
