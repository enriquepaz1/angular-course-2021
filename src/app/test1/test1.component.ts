import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'enrique-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @Input('status') statusTest: string = 'working';
  @Output('onSendData') sendData = new EventEmitter(null);

  constructor() {}

  ngOnInit() {}

  onClickTest(event: any) {
    console.log('EVENT CLICK:', event);
     this.sendData.emit({
      name:'enrique',
      status:'busy'
      
     });



  }
}
