import { Usuario } from "./usuario"

export class Rutina {
    id?: number
    nombre?: string
    fecha_creacion?: Date
    usuario?: Usuario = {}
}
