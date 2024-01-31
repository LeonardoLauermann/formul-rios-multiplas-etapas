import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormContainerComponent } from '../form-container.component';

@Component({
  selector: 'app-form-container-step-2',
  templateUrl: './form-container-step-2.component.html',
  styleUrls: [
    './form-container-step-2.component.scss',
    '../form-container-step-1/form-container-step-1.component.scss',
  ],
})
export class FormContainerStep2Component implements OnInit {
  form!: FormGroup;

  constructor(private formContainer: FormContainerComponent) {}

  ngOnInit() {
    this.form = this.formContainer.getStep2Form();
  }

  submit(): void {
    alert('Formulário enviado!');
  }
}
