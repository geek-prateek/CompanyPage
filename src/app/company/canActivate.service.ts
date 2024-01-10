import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { CompanyService } from "./company.service";

export const canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
)=>{
    const companyService = inject(CompanyService);
    const router = inject(Router);

    if(companyService.items.name === '' && companyService.items.address === ''){
        return false;
    }
    return true;
}