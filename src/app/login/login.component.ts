import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  signUpForm: FormGroup;
  signInRadio: boolean=false;
  constructor(
    private LoginService: LoginService,
    private _http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formValidations();
  }
  formValidations() {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(75),
      ]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(500),
      ]),
    });
    this.signInForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(75),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(500),
      ]),
    });
  }
  signIn(data) {
    this.LoginService.login(data).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userName', res.user.userName);
      localStorage.setItem('userId', res.user.userId);
      this.router.navigateByUrl('/product');
    });
  }
  signup(data) {
    this.LoginService.register(data).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userName', res.user.userName);
      localStorage.setItem('userId', res.user.userId);
      this.signInRadio=true
    });
  }
}
