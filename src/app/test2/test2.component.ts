import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input() name: string;
  @Input () lastName: string;
  @Output () onSendData = new EventEmitter(null);

   myvar1 =4; 
   myvar2 =5;

  constructor() { }
   
  onShowData(){
    this.onSendData.emit('general data '+ this.name+ ' '+ this.lastName);

  }
   
  ngOnInit() {
  }

  test0(event){
   console.log('event click', event);
   console.log('suma: ', this.myvar1+this.myvar2); 

 }
  test1(event){
  console.log('event click', event);
  
}
test2(event){
  console.log('event click', event);
}






}