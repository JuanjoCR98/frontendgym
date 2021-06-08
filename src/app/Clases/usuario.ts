import { Estadistica } from "./estadistica";

export interface Usuario {
    id?: number
    email?: string
    password?: string
    nombre?: string
    apellidos?: string
    fecha_nacimiento?: string
    foto?: string
    rol?: string
    facebook?: string
    twitter?: string
    instagram?: string
    estadisticas?: Estadistica[]
}

export interface accesoUsuario{
    email:string
    password:string
}
