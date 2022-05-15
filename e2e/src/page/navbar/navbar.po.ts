import { by, element } from 'protractor';

export class NavbarPage {
    linkFabrica = element(by.id('linkFabrica'));
    linkFacturar = element(by.id('linkFacturar'));

    async clickBotonFabrica() {
        await this.linkFabrica.click();
    }

    async clickBotonFacturar() {
        await this.linkFacturar.click();
    }
}
