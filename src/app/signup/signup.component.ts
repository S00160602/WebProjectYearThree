import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form
  errorMessage: string;

  constructor(private auth: AuthService, private fb: FormBuilder, private myRoute: Router) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  signup() {
    console.log(this.form.value)
    this.auth.doRegister(this.form.value)
    .then(res => {
      this.myRoute.navigate(['profile']);
    }, err=> {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

}
