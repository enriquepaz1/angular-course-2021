import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(formBuilder:FormBuilder) {
  }
  formReactive: FormGroup;
  this.formReactive = this.formBuilder.group({
    from: '',
    to: '',
    quantity: '',
    MoneyType: '',
    TypeMine: '',
    Miner: '',
  });

}