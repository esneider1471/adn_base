import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { LotePage } from '../page/lote/lote.po';
import { LoginPage } from '../page/login/login.po';
import { browser } from 'protractor';
import { OperacionPage } from '../page/operacion/operacion.po';
import { OperarioPage } from '../page/operario/operario.po';
import { AsignacionLotePage } from '../page/asignacionLote/asignacionLote.po';
import { PagoOperarioPage } from '../page/paogOperario/pagoOperario.po';

describe('workspace-project FacturacionConfecciones', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let login: LoginPage;
    let lote: LotePage;
    let lotesActuales: Promise<number>;
    let operacion: OperacionPage;
    let OperacionesActuales: Promise<number>;
    let operario: OperarioPage;
    let operariosActuales: Promise<number>;
    let asignacionLote: AsignacionLotePage;
    let asignacioLotesActuales: Promise<number>;
    let pagoOperario: PagoOperarioPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        login = new LoginPage();
        lote = new LotePage();
        operacion = new OperacionPage();
        operario = new OperarioPage();
        asignacionLote = new AsignacionLotePage();
        pagoOperario = new PagoOperarioPage();
    });

    it('Deberia listar lotes', async () => {
        page.navigateTo();
        await login.iniciarSession('test@test.com', '123');
        navBar.clickBotonFabrica();
        await lote.clickBotonListarLotes();
        lotesActuales = lote.contarLotes();
        expect(lotesActuales).toBe(lote.contarLotes());
    });

    it('Deberia crear Lote', async () => {
        const ran = Math.floor(Math.random() * 100);
        await lote.clickBotonCrearLote('l' + ran, ran, '10/02/2020', '10/03/2021', 'url');
        await lote.clickBotonListarLotes();
        expect(lotesActuales.then(cont => cont + 1)).toBe(lote.contarLotes());

    });

    it('Deberia listar operaciones', async () => {
        await operacion.clickBotonListarOperaciones();
        OperacionesActuales = operacion.contarOperaciones();
        expect(OperacionesActuales).toBe(operacion.contarOperaciones());
    });

    it('Deberia crear operacion', async () => {
        const ran = Math.floor(Math.random() * 100);
        await operacion.clickBotonCrearOperacion('op' + ran, 'prueba' + ran, ran); browser.sleep(5000);
        await operacion.clickBotonListarOperaciones(); browser.sleep(5000);
        expect(OperacionesActuales.then(cont => cont + 1)).toBe(operacion.contarOperaciones());
    });

    it('Deberia listar operario', async () => {
        await operario.clickBotonListarOperario();
        operariosActuales = operario.contarOperarios();
        expect(operariosActuales).toBe(operario.contarOperarios());
    });

    it('Deberia crear operario', async () => {
        const ran = Math.floor(Math.random() * 100);
        await operario.clickBotonCrearOperario('o' + ran, 'operario' + ran, '2229966', 'cra 254');
        await operario.clickBotonListarOperario();
        expect(operariosActuales.then(cont => cont + 1)).toBe(operario.contarOperarios());
    });

    it('Deberia listar Asingacion lotes', async () => {
        navBar.clickBotonFacturar();
        await asignacionLote.clickBotonListarAsignacionLote();
        asignacioLotesActuales = asignacionLote.contarAsignacionLotes();
        expect(asignacioLotesActuales).toBe(asignacionLote.contarAsignacionLotes());
    });

    it('Deberia crear asignacion Lote', async () => {
        const ran = Math.floor(Math.random() * 100);
        await asignacionLote.clickBotonCrearAsignacionLote('as' + ran, ran);
        await asignacionLote.clickBotonListarAsignacionLote();
        expect(asignacioLotesActuales.then(cont => cont + 1)).toBe(asignacionLote.contarAsignacionLotes());
    });

    it('Deberia listar el Pago de una Operario', async () => {
        await pagoOperario.clickBotonListarPagoOperario();
        await pagoOperario.clickBotonConsultarPagoOperario('o69');
        expect(pagoOperario.contarPagoOperarios).not.toEqual(0);
    });
});
