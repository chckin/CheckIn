import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.registerForm = this._formBuilder.group({
      email: new FormControl('', Validators.required),
    });

  }

}
