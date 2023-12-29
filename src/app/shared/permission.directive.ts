import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { UserService } from "../login/user.service";

@Directive({
    selector: "[permissions]"
})
export class PermissionDirective {

    permissionDetails=[
        {
            usertype: "superadmin",
            access: ["view", "edit"]
        },
        {
            usertype: "admin",
            access: ["view"]
        }
    ];
    constructor(private template: TemplateRef<ElementRef>, private viewContainer: ViewContainerRef, public userService: UserService){}

    @Input() set permissions(permission: string){
        const usertype = this.userService.getUsertype();
        if(permission==usertype){
            this.viewContainer.createEmbeddedView(this.template);
        }else{
            this.viewContainer.clear();
        }
    }
}