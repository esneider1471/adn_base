import {  browser, by, element, protractor } from 'protractor';

export class AsignacionLotePage {
    /*  menu */
    private linkListarAsignacionLote = element(by.id('linkListarAsignacionLote'));
    private linkCrearAsignacionLote = element(by.id('linkCrearAsignacionLote'));
    private dropdownAignacionLote = element(by.id('dropdownAsignacionLote'));
    //campos
    private listaAsignacionLotes = element.all(by.id('idAsignacionLotes'));
    private idAsignacionLote = element(by.id('idAsignacionLote'));
    private selectOperario = element(by.id('selectOperario'));
    private selectReferenciaLote = element(by.id('selectReferenciaLote'));
    private cantidadPrendas = element(by.id('cantidadPrendas'));
    private selectOperacion = element(by.id('selectOperacion'));
    private btnCrearAsignacionLote = element(by.id('btnCrearAsignacionLote'));
    private condicion = protractor.ExpectedConditions;

    async clickBotonListarAsignacionLote() {
        await this.dropdownAignacionLote.click();
        await this.linkListarAsignacionLote.click();
    }

    async clickBotonCrearAsignacionLote(idAsignacionLote: string, cantidadPrendas: number) {
        await this.dropdownAignacionLote.click();
        browser.wait(this.condicion.presenceOf(this.linkCrearAsignacionLote), 10000);
        await this.linkCrearAsignacionLote.click();
        browser.wait(this.condicion.presenceOf(this.idAsignacionLote), 10000);
        await this.idAsignacionLote.sendKeys(idAsignacionLote);
        await this.selectOperario.click();
        let optOperario = element(by.id('optionOperario-1'));
        await optOperario.click();
        await this.selectReferenciaLote.click();
        let optReferenciaLote = element(by.id('optionReferenciaLote-1'));
        await optReferenciaLote.click();
        await this.cantidadPrendas.sendKeys(cantidadPrendas);
        await this.selectOperacion.click();
        let optOperacion = element(by.id('optionOperacion-1'));
        await optOperacion.click();

        await this.btnCrearAsignacionLote.click();
    }

    async contarAsignacionLotes() {
        return this.listaAsignacionLotes.count();
    }
}
