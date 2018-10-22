import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exampleForm = new FormGroup ({
    firstName: new FormControl(),
    password: new FormControl(),
  });
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit() {
  }

  login(f){
    // console.log("data",f.form.controls.firstName.value+f.form.controls.password.value)
    this.service.sendToken(f.form.controls.password.value+f.form.controls.firstName.value);
    this.router.navigate(['admin/dashboard'])
  }

}
