import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerStep1Component } from './form-container-step-1.component';

export const routes: Routes = [
  { path: '', component: FormContainerStep1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormContainerStep1RoutingModule {}
