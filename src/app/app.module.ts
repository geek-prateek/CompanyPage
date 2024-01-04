import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './shared/shared.module';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { UserService } from './login/user.service';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company/company.service';
import { TitleCasePipe } from './shared/title-case.pipe';
import { FilterSearchPipe } from './shared/filter-search.pipe';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // CompanyComponent,
    // CompanyEditComponent,
    // TitleCasePipe,
    // FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CommonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
