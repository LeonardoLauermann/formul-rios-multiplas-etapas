import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form' },
  {
    path: 'form',
    loadChildren: () =>
      import('./form-container/form-container.module').then(
        (module) => module.FormContainerModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'form' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
