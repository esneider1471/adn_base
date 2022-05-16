import { browser, by, element, protractor } from 'protractor';

export class LotePage {
    private linkListarLote = element(by.id('linkListarLote'));
    private linkCrearLote = element(by.id('linkCrearLote'));
    private dropdownLote = element(by.id('dropdownLote'));
    private listaLotes = element.all(by.id('idLotes'));
    private idLote = element(by.id('idLote'));
    private cantidadLote = element(by.id('cantidadLote'));
    private fechaInicioLote = element(by.id('fechaInicioLote'));
    private fechaFinLote = element(by.id('fechaFinLote'));
    private fotoLote = element(by.id('fotoLote'));
    private btnCrearLote = element(by.id('btnCrearLote'));
    private condicion = protractor.ExpectedConditions;

    async clickBotonListarLotes() {
        await this.dropdownLote.click();
        await this.linkListarLote.click();
    }

    async clickBotonCrearLote(idLote: string, cantidadLote: number, fechaInicioLote: string,
                              fechaFinLote: string, fotoLote: string) {
        await this.dropdownLote.click();
        browser.wait(this.condicion.presenceOf(this.linkCrearLote), 10000);
        await this.linkCrearLote.click();
        browser.wait(this.condicion.presenceOf(this.idLote), 10000);
        await this.idLote.sendKeys(idLote);
        await this.cantidadLote.sendKeys(cantidadLote);
        await this.fechaInicioLote.sendKeys(fechaInicioLote);
        await this.fechaFinLote.sendKeys(fechaFinLote);
        await this.fotoLote.sendKeys(fotoLote);
        await this.btnCrearLote.click();
    }

    async contarLotes() {
        return this.listaLotes.count();
    }
}
