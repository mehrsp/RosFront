import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginDto } from '../../../../core/models/authentication/login.dto';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  //#region Properties
  form: FormGroup;

  @Output() 
  onLogin: EventEmitter<any> = new EventEmitter();
  //#region Properties

  //#region Ctors
  constructor(
    private fb: FormBuilder    
  ) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {

  }
  //#region Lifecycle Hooks

  //#region Functions
  onSubmit() {
    if (this.form.valid) {
      const loginModel = new LoginDto();
      loginModel.userName = this.form.get('username').value;
      loginModel.password = this.form.get('password').value;
      loginModel.grand_type = "password";
      this.onLogin.emit(loginModel);
    }
  }
  //#endregion Functions
}
