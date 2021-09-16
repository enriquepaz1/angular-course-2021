import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BilleteraService } from './billetera.service';
import { BilleteraComponent } from './billetera/billetera.component';
import { TransaccionService } from './transaccion.service';
import { TransaccionComponent } from './transaccion/transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    BilleteraComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [TransaccionService,BilleteraService],

  bootstrap: [AppComponent]
})
export class AppModule { }
