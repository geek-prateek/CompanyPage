import { NgModule } from "@angular/core";
import { SharedDirective } from "./shared.directive";
import { PermissionDirective } from "./permission.directive";

@NgModule({
    declarations: [SharedDirective, PermissionDirective],
    exports: [SharedDirective, PermissionDirective]
})
export class SharedModule{
    
}