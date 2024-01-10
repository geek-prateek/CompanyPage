import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot | undefined 
) => {
    
        return component.canDeactivate();
   
}
