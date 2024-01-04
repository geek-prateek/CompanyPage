import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CompanyDetails } from "src/app/company/CompanyDetails";
import { CompanyService } from "src/app/company/company.service";

@Component({
    selector: "app-company-edit",
    templateUrl: "./company-edit.component.html"
})
export class CompanyEditComponent implements OnInit{
    // @Input() item: any = {};
    // @Output() hide = new EventEmitter<boolean>();
    empName: string = '';
    empAddr: string = '';
    

    constructor(private router: Router, private route: ActivatedRoute, private companyService: CompanyService){}
    ngOnInit() {
        this.route.queryParams.subscribe((params: Params)=>{
            this.empName = params['name'];
            this.empAddr = params['address'];
        })
    }

    // ngOnChanges(){
    //     console.log("Item : " +this.companyService.items);
    //     this.empName = this.companyService.items.name;
    //     this.empAddr = this.companyService.items.address;
    // }
    onSubmit(){
        if(this.empAddr !== '' && this.empName !== ''){
            this.companyService.items.name = this.empName;
            this.companyService.items.address = this.empAddr;
            // this.hide.emit(false);
            this.router.navigate(['company/link']);
            this.empName = "";
            this.empAddr = "";
            
        }else{
            alert("Fill Details");
        }   
    }

    onClear(){
        this.router.navigate(['company/link'])
    }

}