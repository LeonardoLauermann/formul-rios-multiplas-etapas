import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerStep2Component } from './form-container-step-2.component';
import { FormContainerStep2RoutingModule } from './form-container-step-2-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormContainerStep2RoutingModule, ReactiveFormsModule],
  declarations: [FormContainerStep2Component],
})
export class FormContainerStep2Module {}
