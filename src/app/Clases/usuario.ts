export interface Usuario {
    id?: number
    email?: string
    password?: string
    nombre?: string
    apellidos?: string
    fecha_nacimiento?: Date
    foto?: string
    rol?: string
    facebook?: string
    twitter?: string
    instagram?: string
}

export interface accesoUsuario{
    email:string
    password:string
}
