import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanyDetails } from "src/app/company/CompanyDetails";
import { CompanyService } from "src/app/company/company.service";

@Component({
    selector: "app-company-edit",
    templateUrl: "./company-edit.component.html"
})
export class CompanyEditComponent implements OnChanges{
    // @Input() item: any = {};
    // @Output() hide = new EventEmitter<boolean>();
    empName: string = this.companyService.items.name;
    empAddr: string = this.companyService.items.address;
    

    constructor(private router: Router, private route: ActivatedRoute, private companyService: CompanyService){}
   

    ngOnChanges(){
        console.log("Item : " +this.companyService.items);
        this.empName = this.companyService.items.name;
        this.empAddr = this.companyService.items.address;
    }
    onSubmit(){
        if(this.empAddr !== '' && this.empName !== ''){
            this.companyService.items.name = this.empName;
            this.companyService.items.address = this.empAddr;
            // this.hide.emit(false);
            this.router.navigate(['company']);
            this.empName = "";
            this.empAddr = "";
            
        }else{
            alert("Fill Details");
        }   
    }

}