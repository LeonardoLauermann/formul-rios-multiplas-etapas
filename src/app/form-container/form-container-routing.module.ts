import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './form-container.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'step-1',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FormContainerComponent,
    children: [
      {
        path: 'step-1',
        loadChildren: () =>
          import('./form-container-step-1/form-container-step-1.module').then(
            (module) => module.FormContainerStep1Module
          ),
      },
      {
        path: 'step-2',
        loadChildren: () =>
          import('./form-container-step-2/form-container-step-2.module').then(
            (module) => module.FormContainerStep2Module
          ),
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'step-1' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormContainerRoutingModule {}
