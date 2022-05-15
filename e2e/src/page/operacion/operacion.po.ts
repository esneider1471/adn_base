import { browser, by, element, protractor } from 'protractor';

export class OperacionPage {
    /*  menu */
    private linkListarOperacion = element(by.id('linkListarOperacion'));
    private linkCrearOperacion = element(by.id('linkCrearOperacion'));
    private dropdownOperacion = element(by.id('dropdownOperacion'));
    //campos
    private listaOperaciones = element.all(by.id('idOperaciones'));
    private idOperacion = element(by.id('idOperacion'));
    private nombreOperacion = element(by.id('nombreOperacion'));
    private valorOperacionUnidad = element(by.id('valorOperacionUnidad'));
    private btnCrearOperacion = element(by.id('btnCrearOperacion'));
    private condicion = protractor.ExpectedConditions;

    async clickBotonListarOperaciones() {
        await this.dropdownOperacion.click();
        await this.linkListarOperacion.click();
    }

    async clickBotonCrearOperacion(idOperacion: string, nombreOperacion: string, valorOperacionUnidad: number) {
        await this.dropdownOperacion.click();
        browser.wait(this.condicion.presenceOf(this.linkCrearOperacion), 10000);
        await this.linkCrearOperacion.click();
        browser.wait(this.condicion.presenceOf(this.idOperacion), 10000);
        await this.idOperacion.sendKeys(idOperacion);
        await this.nombreOperacion.sendKeys(nombreOperacion);
        await this.valorOperacionUnidad.sendKeys(valorOperacionUnidad);
        await this.btnCrearOperacion.click();
    }

    async contarOperaciones() {
        return this.listaOperaciones.count();
    }
}
