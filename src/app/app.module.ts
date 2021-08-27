import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImpurePipe } from './pipes/impure.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';


const routes:Routes =[

 {


  path: '', redirectTo: 'view1', pathMatch:'full'
 },



{
path: 'view1',component: View1Component
},

{
  path: 'view2', component : View2Component

}

];


@NgModule({
  declarations: [
    AppComponent,ImpurePipe,PurePipe,View1Component,View2Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
