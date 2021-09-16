import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BilleteraService } from './billetera.service';
import { TransaccionService } from './transaccion.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TransaccionService,BilleteraService],

  bootstrap: [AppComponent]
})
export class AppModule { }
