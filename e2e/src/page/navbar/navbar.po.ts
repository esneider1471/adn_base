import { by, element } from 'protractor';

export class NavbarPage {
    linkFabrica = element(by.id('linkFabrica'));

    async clickBotonFabrica() {
        await this.linkFabrica.click();
    }
}
