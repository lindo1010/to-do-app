import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username :string = 'Fluffy';
  password :string= '';
  errorMessage :string= 'Invalid Credentials';
  invalidLogin :boolean = false;


  constructor(private router: Router,
              private hardcodedAuthService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardcodedAuthService.aunthenticate(this.username, this.password)) {
      //redirect to welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false;
    } else this.invalidLogin = true;
  }

}
