import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngifEnrique]'
})
export class Directive2Directive implements OnChanges{

 @Input() ngifEnrique:boolean= true;


  constructor( private templateRef: TemplateRef<any>,
    private viewContainerRef:ViewContainerRef) {


     }




     ngOnChanges(changes:any){

     console.log ('changes:', changes.ngifEnrique.currentValue)
      this.setViewContainer (changes.ngifEnrique.currentValue)

     }

     setViewContainer(show:boolean){
      if(show){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      }else{
        this.viewContainerRef.clear();
     }
    }
    }