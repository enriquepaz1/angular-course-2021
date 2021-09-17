import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EditarService {

  mode: Subject<string>
  info: Subject<[]>

  constructor() {
     this.mode = new Subject<string>();
     this.info = new Subject<[]>();
  }

  setMode(t: string){
      this.mode.next(t)
  }

  setInfo(info:[]){
    this.info.next(info)
}

}