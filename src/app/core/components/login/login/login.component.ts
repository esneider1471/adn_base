import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@core/components/login/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private readonly router: Router) { }

  ngOnInit() {
    this.construirFormularioLogin();
  }

  consultarUsuario() {
    this.loginService.consultarUsuario(this.loginForm.value).subscribe(resp => {
      if (resp[0].email) {
        localStorage.setItem('logIn', resp[0].email);
        this.router.navigateByUrl('/fabrica');
      }
    }
    );
  }

  private construirFormularioLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', [Validators.required]),
    });
  }
}
