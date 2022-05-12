import { Component, OnInit } from '@angular/core';
import { Login } from '@core/components/login/shared/model/login';
import { LoginService } from '@core/components/login/shared/services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app-base';
  isLogin: Login;

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.login.isLogin$.subscribe(respuesta =>
      this.isLogin = respuesta
    );
  }

  logOut() {
    this.login.logOut();
  }

}
