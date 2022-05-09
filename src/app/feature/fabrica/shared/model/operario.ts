export class Operario {
    id: string;
    nombre: string;
    telefono: string;
    direccion: string;

    constructor(id: string, nombre: string, telefono: string, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}
