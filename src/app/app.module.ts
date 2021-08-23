import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Directive1Directive,
    Directive2Directive
  ],
  imports: [BrowserModule, FormsModule, HomeModule, AdminModule, BuyModule,CoreModule,LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
