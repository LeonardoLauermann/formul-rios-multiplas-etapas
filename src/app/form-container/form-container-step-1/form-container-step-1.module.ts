import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerStep1Component } from './form-container-step-1.component';
import { FormContainerStep1RoutingModule } from './form-container-step-1-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormContainerStep1RoutingModule, ReactiveFormsModule],
  declarations: [FormContainerStep1Component],
})
export class FormContainerStep1Module {}
