import { Pipe, PipeTransform } from "@angular/core";
import { CompanyService } from "../company/company.service";

@Pipe({
    name: 'searchFilter'
})
export class FilterSearchPipe implements PipeTransform{

    transform(company: any[], name: string, value: string){
        if(!company || !name || !value){
            return company;
        }
        return company.filter(company =>{
            return company[name] && company[name].toLowerCase().includes(value.toLowerCase());
        })
    }

}