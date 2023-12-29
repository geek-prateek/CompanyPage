import { Injectable } from "@angular/core";
import { CompanyDetails } from "./CompanyDetails";

@Injectable()
export class CompanyService{

    items: any =[];

    company: CompanyDetails[]=[
        {
            id: 1,
            name: "blue dwarf",
            address: "ahmedabad",
            jobrole: "SDE",
            ctc: 18,
            timeshift: "UK"
        },
        {
            id: 2,
            name: "brain payroll",
            address: "ahmedabad",
            jobrole: "FullStack",
            ctc: 20,
            timeshift: "US"
        },
        {
            id: 3,
            name: "fintech",
            address: "ahmedabad",
            jobrole: "Account",
            ctc: 16,
            timeshift: "US"
        },
        {
            id: 4,
            name: "brain tech labs",
            address: "ahmedabad",
            jobrole: "Developer",
            ctc: 15,
            timeshift: "UK"
        },
        {
            id: 5,
            name: "funnel",
            address: "ahmedabad",
            jobrole: "QA",
            ctc: 15,
            timeshift: "UK"
        },
        {
            id: 6,
            name: "webelight",
            address: "ahmedabad",
            jobrole: "Design",
            ctc: 14,
            timeshift: "US"
        },
    ]

    getCompany(){
        return this.company.slice();
    }


}