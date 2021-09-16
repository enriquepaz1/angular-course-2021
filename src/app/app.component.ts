import { Component, OnInit } from '@angular/core';
import { BilleteraService } from './billetera.service';
import { TransaccionService } from './transaccion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular2021';
  wallets: any[] = [];
  transactions: any[] = [];

  constructor(
    private transaccionService: TransaccionService,
    private billeteraService: BilleteraService
  ) {}

  ngOnInit() {
    this.getTransaccion();
    this.getWallets();
  }

  getTransaccion() {
    this.transaccionService.getAll().subscribe(
      (res) =>
        (this.transactions = Object.entries(res).map((s: any) => ({
          id: s[0],
          ...s[1],
        })))
    );
  }

  getWallets() {
    this.billeteraService.getAll().subscribe(
      (res) =>
        (this.wallets = Object.entries(res).map((s: any) => ({
          id: s[0],
          ...s[1],
        })))
    );
  }
}
