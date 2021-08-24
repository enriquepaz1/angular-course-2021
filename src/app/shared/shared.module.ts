import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Provider2Component } from './provider2/provider2.component';
import { Shared1Component } from './shared1/shared1.component';
import { Shared2Component } from './shared2/shared2.component';
import { Shared3Component } from './shared3/shared3.component';
@NgModule({
  imports: [
    CommonModule],
  declarations: [Shared1Component,Shared2Component,Shared3Component],
   exports:[
     Shared1Component,Shared2Component,Shared3Component
   ]

})
export class SharedModule { }