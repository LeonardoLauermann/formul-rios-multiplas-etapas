import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormContainerComponent } from '../form-container.component';

@Component({
  selector: 'app-form-container-step-1',
  templateUrl: './form-container-step-1.component.html',
  styleUrls: ['./form-container-step-1.component.scss'],
})
export class FormContainerStep1Component implements OnInit {
  form!: FormGroup;

  constructor(private formContainer: FormContainerComponent) {}

  ngOnInit() {
    this.form = this.formContainer.getStep1Form();
  }
}
