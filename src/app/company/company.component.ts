import { Component, Input, OnInit} from '@angular/core';
import { CompanyDetails } from './CompanyDetails';
import { CompanyService } from './company.service';
import { UserService } from '../login/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
    // @Input() show: boolean = false;
    company: CompanyDetails[] = [];
    search: string="";
    
    constructor(private companyService: CompanyService, public userService: UserService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(){
        this.company = this.companyService.getCompany();
        
    }
    
    onClick(event : any){
        console.log(event);
        this.companyService.items = event;
        
        // this.userService.flag = true;
        this.router.navigate(['company/company-edit'], {queryParams: {name: this.companyService.items.name, address: this.companyService.items.address}});
    }

    onReturn(){
        this.router.navigate(['../']);
    }
   
    // onSubmit(event: any){
    //     this.show = event;
    //     this.userService.flag = false;
    // }
}
