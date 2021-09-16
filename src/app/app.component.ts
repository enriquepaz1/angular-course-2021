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

  onMine(transaction: any): void {
    const walletFROM = this.wallets.find((w) => w.wallet === transaction.from);
    const walletTO = this.wallets.find((w) => w.wallet === transaction.to);

    walletFROM[transaction.moneyType] =
      walletFROM[transaction.moneyType] - transaction.quantity;
    walletTO[transaction.moneyType] =
      walletTO[transaction.moneyType] + transaction.quantity;

    this.transaccionService
      .delete(transaction.id)
      .subscribe(() => this.getTransaccion());
    this.billeteraService
      .update(walletFROM.id, walletFROM)
      .subscribe((res) => this.getWallets());
    this.billeteraService
      .update(walletTO.id, walletTO)
      .subscribe((res) => this.getWallets());
  }

  TransactionActualizado(): boolean {
    const aux = this.transactions.filter(
      (t) => t.mineType === 'PoS' && t.miner < 20
    );
    return this.transactions.length === aux.length;
  }

  TotalCoin(type: string): number {
    return this.wallets.reduce(
      (acc, value) => acc + (value[type] > 0 ? value[type] : 0),
      0
    );
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
