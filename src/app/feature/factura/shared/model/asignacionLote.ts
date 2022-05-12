export class AsignacionLote {
    id: number;
    referenciaLote: string;
    cantidadPrendas: number;
    operacionId: string;
    operarioId: string;

    constructor(id: number, referenciaLote: string, cantidadPrendas: number, operacionId: string, operarioId: string) {
        this.id = id;
        this.referenciaLote = referenciaLote;
        this.cantidadPrendas = cantidadPrendas;
        this.operacionId = operacionId;
        this.operarioId = operarioId;
    }
}
