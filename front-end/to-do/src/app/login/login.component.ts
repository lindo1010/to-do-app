import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'Fluffy' && this.password === 'lindokuhle') {
      //redirect to welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false;
    } else this.invalidLogin = true;
  }

}
