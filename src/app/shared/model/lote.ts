export class Lote {
    id: string;
    cantidad: number;
    fechaInicio: string;
    fechaFin: string;
    foto: string;

    constructor(id: string, cantidad: number, fechaInicio: string, fechaFin: string, foto: string) {
        this.id = id;
        this.cantidad = cantidad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.foto = foto;
    }
}
