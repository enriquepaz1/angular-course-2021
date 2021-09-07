import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VacunasService } from './vacunas.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [VacunasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
