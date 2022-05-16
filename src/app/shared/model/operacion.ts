export class Operacion {
    id: string;
    nombreOperacion: string;
    valorOperacionUnidad: number;

    constructor(id: string, nombreOperacion: string, valorOperacionUnidad: number) {
        this.id = id;
        this.nombreOperacion = nombreOperacion;
        this.valorOperacionUnidad = valorOperacionUnidad;
    }
}
