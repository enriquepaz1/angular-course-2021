import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';

const: routes : Routes=[
  {path: 'home', component: HomeComponent},
  {}
  children:[
{path: 'home1', component:Home1Component},
{path: 'home2', component: Home2Component}

  ]
  }
];
  

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [Home1Component,Home2Component,SubHomeComponent]
})
export class HomeModule { }