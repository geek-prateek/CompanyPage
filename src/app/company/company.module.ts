import { NgModule } from "@angular/core";
import { CompanyComponent } from "./company.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { CompanyRoutingModule } from "./company-routing.module";
import { TitleCasePipe } from "../shared/title-case.pipe";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FilterSearchPipe } from "../shared/filter-search.pipe";

@NgModule({
    declarations: [
        TitleCasePipe,
        FilterSearchPipe,
        CompanyComponent,
        CompanyEditComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        CompanyRoutingModule
    ],
    exports: [
        CompanyRoutingModule
    ],
})
export class CompanyModule{

}