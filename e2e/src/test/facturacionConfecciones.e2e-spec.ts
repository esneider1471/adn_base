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
    //Lotes
    let lote: LotePage;
    let lotesActuales: Promise<number>;
    //Operaciones
    let operacion: OperacionPage;
    let OperacionesActuales: Promise<number>;
    //Operario
    let operario: OperarioPage;
    let operariosActuales: Promise<number>;
    //AsignacionLote
    let asignacionLote :AsignacionLotePage;
    let asignacioLotesActuales :Promise<number>;
    //PagoOperario
    let pagoOperario:PagoOperarioPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        login = new LoginPage();
        lote = new LotePage();
        operacion = new OperacionPage();
        operario = new OperarioPage();
        asignacionLote = new AsignacionLotePage();
        pagoOperario= new PagoOperarioPage();
    });

    //Lotes

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
        lote.clickBotonCrearLote('l' + ran, ran, '10/02/2020', '10/03/2021', 'url');
        browser.sleep(5000);
        lote.clickBotonListarLotes();
        browser.sleep(5000);
        expect(lotesActuales.then(cont => cont + 1)).toBe(lote.contarLotes());
       
    });

    //Operaciones

    it('Deberia listar operaciones', () => {
        operacion.clickBotonListarOperaciones();
        browser.sleep(5000);
        OperacionesActuales = operacion.contarOperaciones();
        expect(OperacionesActuales).toBe(operacion.contarOperaciones());
    });


    it('Deberia crear operacion', () => {
        const ran = Math.floor(Math.random() * 100);
        operacion.clickBotonCrearOperacion('op' + ran, 'prueba'+ ran, ran);
        browser.sleep(5000);
        operacion.clickBotonListarOperaciones();
        browser.sleep(5000);
        expect(OperacionesActuales.then(cont => cont + 1)).toBe(operacion.contarOperaciones());
    });

     //Operarios

     it('Deberia listar operario', () => {
        operario.clickBotonListarOperario();
        browser.sleep(5000);
        operariosActuales = operario.contarOperarios();
        expect(operariosActuales).toBe(operario.contarOperarios());
    });


    it('Deberia crear operario', () => {
        const ran = Math.floor(Math.random() * 100);
        operario.clickBotonCrearOperario('o' + ran, 'operario'+ ran, '2229966','cra 254');
        browser.sleep(5000);
        operario.clickBotonListarOperario();
        browser.sleep(5000);
        expect(operariosActuales.then(cont => cont + 1)).toBe(operario.contarOperarios());
    });

    //Asignacion Lote

    it('Deberia listar Asingacion lotes', () => {
        navBar.clickBotonFacturar();
        asignacionLote.clickBotonListarAsignacionLote();
        browser.sleep(5000);
        asignacioLotesActuales = asignacionLote.contarAsignacionLotes();
        expect(asignacioLotesActuales).toBe(asignacionLote.contarAsignacionLotes());
    });

    it('Deberia crear asignacion Lote', () => {
        const ran = Math.floor(Math.random() * 100);
        
        asignacionLote.clickBotonCrearAsignacionLote('as' + ran, ran);
        browser.sleep(5000);
        asignacionLote.clickBotonListarAsignacionLote();
        browser.sleep(5000);
        expect(asignacioLotesActuales.then(cont => cont + 1)).toBe(asignacionLote.contarAsignacionLotes());
    });

    //Pago Operario

    it('Deberia listar el Pago de una Operario', () => {
        pagoOperario.clickBotonListarPagoOperario();
        browser.sleep(5000);
        pagoOperario.clickBotonConsultarPagoOperario('o69');
        browser.sleep(5000);
    });

});
