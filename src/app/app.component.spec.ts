import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '@core/components/login/shared/services/login.service';


describe('AppComponent', () => {
  let component: AppComponent;
 /*  let login: LoginService; */
 /*  const dummyLogin =  new Login('test@test.com', '123'); */

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule,
                RouterTestingModule],
      providers:[LoginService]
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
   /*  login = TestBed.inject(LoginService); */
    /* spyOn(login, 'isLogin$').and.returnValue(
      of( dummyLogin) as EventEmitter<Login>
    ); */

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-base'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app-base');
  });

  it(`tiene sesion activa`, () => {
    
    component.ngOnInit();
   /*  expect(component.login.isLogin$).toHaveBeenCalled();
   component.login.isLogin$.subscribe(respuesta =>{
     expect(component.isLogin).toEqual(respuesta);
   }); */
   });
 

  it(`deberia hacer logOut`, () => {
   component.logOut();
  });


});
