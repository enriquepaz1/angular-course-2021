import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Admin1Component } from './components/admin1/admin1.component';
import { Admin2Component } from './components/admin2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
  Admin1Component,
  Admin2Component
  ],

  exports: [
   
  ]
})
export class AdminModule { }