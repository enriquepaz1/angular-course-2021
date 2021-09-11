import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImpurePipe } from './pipes/impure.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { View1Component } from './view1/view1.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { View2Component } from './view2/view2.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { View3sub2Component } from './view3/view3sub2/view3sub2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './login/services/auth.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

const routes: Routes = [
{path:'',redirectTo:'login', pathMatch:'full'},

{path:'login', loadChildren:
()=> import('./login/login.module').then(m=>m.LoginModule)
},

{path:'pages', loadChildren:
()=> import('./pages/pages.module').then(m=>m.PagesModule)
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
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
