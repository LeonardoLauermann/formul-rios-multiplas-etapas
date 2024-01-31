import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      step1: this.formBuilder.group({
        firstName: '',
        lastName: '',
        birthDate: '',
      }),
      step2: this.formBuilder.group({
        address: '',
        country: '',
      }),
    });
  }

  getStep1Form(): FormGroup {
    return this.form.get('step1') as FormGroup;
  }

  getStep2Form(): FormGroup {
    return this.form.get('step2') as FormGroup;
  }
}
