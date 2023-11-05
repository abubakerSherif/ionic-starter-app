import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from './age.validator'
@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  public form!: FormGroup;
  public submitAttempt: boolean = false;
  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['', AgeValidator.isValid]
    })

  }

  save() {
    this.submitAttempt = true;
    if (!this.form.valid) {

    }
    else {
      console.log("success!")
    }
  }
}
