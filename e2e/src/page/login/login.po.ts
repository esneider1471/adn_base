import { by, element } from 'protractor';

export class LoginPage {
    private inputEmail = element(by.id('email'));
    private inputPassword = element(by.id('password'));
    private buttonLogin = element(by.id('btnLogin'));

    async iniciarSession(email: string, password: string) {
        await this.inputEmail.sendKeys(email);
        await this.inputPassword.sendKeys(password);
        await this.buttonLogin.click();

    }
}
