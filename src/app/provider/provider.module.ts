import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider1Component } from './provider1/provider1.component';

import { SharedModule } from '../shared/shared.module';
import { Provider2Component } from './provider2/provider2.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Provider1Component,Provider2Component]
})
export class ProviderModule { }