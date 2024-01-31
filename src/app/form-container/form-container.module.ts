import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerRoutingModule } from './form-container-routing.module';
import { FormContainerComponent } from './form-container.component';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [CommonModule, FormContainerRoutingModule, ReactiveFormsModule],
})
export class FormContainerModule {}
