import { LoginService } from './services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedIn = false;
  constructor(private LoginService: LoginService) {}
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.loggedIn=true
    }
    this.getHeader()
  }
  getHeader() {
   this.LoginService.loggedIn.subscribe((res:any)=>{
    this.loggedIn=res;
   })
  }
}
