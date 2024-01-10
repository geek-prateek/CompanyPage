import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register',  component: RegisterComponent},
  {path: 'company', loadChildren: ()=>import('src/app/company/company.module').then(x => x.CompanyModule)},
  // {path: 'company', component: CompanyComponent, children: [
  //   {path: 'company-edit', component: CompanyEditComponent},
  // ]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
