import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { LotePage } from '../page/lote/lote.po';
import { LoginPage } from '../page/login/login.po';
import { browser } from 'protractor';

describe('workspace-project Lote', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let lote: LotePage;
    let login: LoginPage;
    let lotesActuales: Promise<number>;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        lote = new LotePage();
        login = new LoginPage();
    });

    it('Deberia listar lotes', () => {

        page.navigateTo();
        login.iniciarSession('test@test.com', '123');
        browser.sleep(5000);
        navBar.clickBotonFabrica();
        lote.clickBotonListarLotes();
        browser.sleep(5000);
        lotesActuales = lote.contarLotes();
        expect(lotesActuales).toBe(lote.contarLotes());
    });


    it('Deberia crear Lote', () => {
        const ran = Math.floor(Math.random() * 100);
        lote.clickBotonCrearLote('l' + ran, 14, '10/02/2020', '10/03/2021', 'url');
        browser.sleep(5000);
        lote.clickBotonListarLotes();
        browser.sleep(5000);
        expect(lotesActuales.then(cont => cont + 1)).toBe(lote.contarLotes());
    });
});
