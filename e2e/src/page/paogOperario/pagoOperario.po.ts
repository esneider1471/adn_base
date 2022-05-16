import { browser, by, element, protractor } from 'protractor';

export class PagoOperarioPage {
    private linkPagarOperario = element(by.id('linkPagarOperario'));
    private dropdownPagaroperario = element(by.id('dropdownPagaroperario'));
    private inputIdOperario = element(by.id('inputIdOperario'));
    private btnConsultarOperario = element(by.id('btnConsultarOperario'));
    private condicion = protractor.ExpectedConditions;

    async clickBotonListarPagoOperario() {
        await this.dropdownPagaroperario.click();
        await this.linkPagarOperario.click();
    }

    async clickBotonConsultarPagoOperario(idOperario: string) {
        browser.wait(this.condicion.presenceOf(this.inputIdOperario), 10000);
        await this.inputIdOperario.sendKeys(idOperario);
        await this.btnConsultarOperario.click();
        browser.sleep(5000);
    }

}
