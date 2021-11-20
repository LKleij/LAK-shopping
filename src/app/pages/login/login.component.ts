import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isLoginForm = true;

  constructor(private router: Router) { 
    let data = this.router.getCurrentNavigation()?.extras.state;

    if (data) {
      this.isLoginForm = data.data;
    }
  }

  ngOnInit(): void {
  }


  onSubmit(loginData: {email: string, password: string}) {
    console.log(loginData);
  }

  onSwitchForm() {
    this.isLoginForm = !this.isLoginForm;
  }
}
