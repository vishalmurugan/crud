import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then((x) => x.DashboardModule)
  },
  {
    path: 'add-book',
    loadChildren: () =>
      import('./components/form/form.module').then((x) => x.FormModule)
  },
  {
    path: 'edit-book/:id',
    loadChildren: () =>
      import('./components/form/form.module').then((x) => x.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
