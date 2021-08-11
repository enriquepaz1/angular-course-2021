import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
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
  constructor() {
    console.log('CONSTRUCTOR');
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
