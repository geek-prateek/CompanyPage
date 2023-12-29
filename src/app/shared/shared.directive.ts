import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[fontWeight]',
})
export class SharedDirective implements OnInit{
    @Input() fontWeight: string ="";

    constructor(private el: ElementRef){
        
    }
    ngOnInit(): void {
        this.el.nativeElement.style.fontWeight = this.fontWeight;
        console.log(this.el.nativeElement.style.fontWeight);
    }

    

}