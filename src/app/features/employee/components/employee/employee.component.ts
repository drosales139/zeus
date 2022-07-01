import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
  },
};

@Component({
  selector: 'employee-form',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class EmployeeComponent implements OnInit {
  @Output('onSubmit') _submit = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {

    const {birthday,...values}= this.form.value

    const payload ={
      ...values,
      birthday: moment(birthday).format('YYYY/MM/DD')
    }

    this._submit.emit(payload);
    this.form.reset()
  }
}
