import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImpurePipe } from './pipes/impure.pipe';
import { PurePipe } from './pipes/pure.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
    PurePipe
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
