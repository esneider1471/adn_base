import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  const apiEndpointLoginConsulta = `${environment.endpoint}/login?email=test@test.com&password=123`;

  beforeEach(() => {
    const injector =TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    const loginService: LoginService = TestBed.inject(LoginService);
    expect(loginService).toBeTruthy();
  });

  it('deberia listar operarios', () => {
    const dummyLogin =  new Login('test@test.com', '123');
    ;
    service.consultarUsuario(dummyLogin).subscribe(login => {
      expect(login.email).toBe(dummyLogin.email);
      expect(login).toEqual(dummyLogin);
    });
    const req = httpMock.expectOne(apiEndpointLoginConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyLogin);
  });
});
