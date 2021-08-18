import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';

@Directive({
  selector: '[directiveTest1]'
})
export class Directive1Directive implements OnChanges {

  @Input() directiveTest1:string='yellow';
  @Output() outputTest = new  EventEmitter<any>(null);

   @HostListener('click') onClick(){
    this.setBackgroundColor(this.directiveTest1);
   }

   @HostListener('mouseleave') onMouseleave(){
    this.setBackgroundColor('green');
    this.outputTest.emit('test myoutput');
   }


   @HostListener('mouseenter') onMouseenter(){
    this.setBackgroundColor('gray');
    this.element.nativeElement.style.backgroundColor = 'gray';
  }

  constructor(private element:ElementRef) { 
 this.setBackgroundColor(this.directiveTest1);
 this.element.nativeElement.style.border='10px green solid';

  }


  setBackgroundColor(color1:string){

  this.element.nativeElement.style.backgroundColor = color1;
  }
  

  ngOnchanges(changes:any){
    this.setBackgroundColor(changes.directiveTest1.currentValue)
  }




}