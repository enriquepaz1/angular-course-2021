import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit {
  @Input() name;
  myname = 'enrique';
  mylastName = 'paz';

  constructor() {
    console.log('CONSTRUCTOR');
  }

  testTask(event) {
    console.log('event click', event);
    console.log('Datos: ', this.myname + this.mylastName);
  }

  ngOnInit() {
    console.log('OnInit');
  }
  ngDoCheck() {
    console.log('DoCheck');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnChanges() {
    console.log('OnChange');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
