import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Admi1Component } from './admin/admi1/admi1.component';
import { Admi2Component } from './admin/admi2/admi2.component';
import { AdminComponent } from './admin/admin.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';
import { ImpurePipe } from './pipes/impure.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { View1Component } from './view1/view1.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { View2Component } from './view2/view2.component';
import { View3sub1Component } from './view3/view3sub1/view3sub1.component';
import { View3sub2Component } from './view3/view3sub2/view3sub2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view1',
    pathMatch: 'full'
  },


  {
    path: 'view1',
    component: View1Component,
    children: [
      {
        path: '',
        redirectTo: 'view1sub1',
        pathMatch: 'full'
      },
      {
        path: 'view1sub1',
        component: View1sub1Component
      },
      {
        path: 'view1sub2',
        component: View1sub2Component
      }
    ]
  },

  {
    path: 'view2/:id/sub/:id2',
    component: View2Component
  },

  {
    path: 'view3',
    loadChildren: () => import('./view3/view3.module').then(m => m.View3Module)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ImpurePipe,
    PurePipe,
    View1Component,
    View1sub1Component,
    View1sub2Component,
    View2Component
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
