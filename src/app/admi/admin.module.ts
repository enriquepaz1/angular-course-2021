import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admi1Component } from './admi1/admi1.component';
import { Admi2Component } from './admi2/admi2.component';
import { RouterModule, Routes } from '@angular/router';
import { AdmiComponent } from './admi.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';

const: routes: Routes=[
{path: 'admin', component: AdmiComponent},
{
 children:[
   {path:'admi1', component: Admi1Component},
   {path:'admi2', component: Admi2Component}
 ]


}


];




@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [Admi1Component,Admi2Component,SubAdminComponent]
})
export class AdminModule { }