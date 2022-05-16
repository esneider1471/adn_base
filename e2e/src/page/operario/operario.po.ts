import { browser, by, element, protractor } from 'protractor';

export class OperarioPage {
    private linkListarOperario = element(by.id('linkListarOperario'));
    private linkCrearOperario = element(by.id('linkCrearOperario'));
    private dropdownOperario = element(by.id('dropdownOperario'));
    private listaOperarios = element.all(by.id('idOperarios'));
    private idOperario = element(by.id('idOperario'));
    private nombre = element(by.id('nombre'));
    private telefono = element(by.id('telefono'));
    private direccion = element(by.id('direccion'));
    private btnCrearOperario = element(by.id('btnCrearOperario'));
    private condicion = protractor.ExpectedConditions;

    async clickBotonListarOperario() {
        await this.dropdownOperario.click();
        await this.linkListarOperario.click();
    }

    async clickBotonCrearOperario(idOperario: string, nombre: string, telefono: string, direccion: string) {
        await this.dropdownOperario.click();
        browser.wait(this.condicion.presenceOf(this.linkCrearOperario), 10000);
        await this.linkCrearOperario.click();
        browser.wait(this.condicion.presenceOf(this.idOperario), 10000);
        await this.idOperario.sendKeys(idOperario);
        await this.nombre.sendKeys(nombre);
        await this.telefono.sendKeys(telefono);
        await this.direccion.sendKeys(direccion);
        await this.btnCrearOperario.click();
    }

    async contarOperarios() {
        return this.listaOperarios.count();
    }
}
