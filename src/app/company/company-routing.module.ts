import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { canDeactivateGuard } from './can-deactivate-guard.service';
import { canActivate } from './canActivate.service';

const routes: Routes = [
  {
    path: 'link',
    component: CompanyComponent,
  },
  { path: 'company-edit', component: CompanyEditComponent, canDeactivate: [canDeactivateGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
