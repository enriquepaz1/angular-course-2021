import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { BilleteraService } from './billetera.service';
import { EditarService } from './editar.service';
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

  formReactive: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private transaccionService: TransaccionService,
    private billeteraService: BilleteraService, 
    private editarService:EditarService
  ) {
    this.formReactive = this.formBuilder.group({
      from: '',
      to: '',
      quantity: '',
      MoneyType: '',
      TypeMine: '',
      Miner: '',
    });
  }

  ngOnInit() {
    this.getTransaccion();
    this.getWallets();
  }

  onShowAll() {
    this.transaccionService.create(this.formReactive.value).subscribe((result)=>{console.log(this.formReactive.value)})
    console.log('DDD', this.formReactive.value);
  }

  Editar(edittrans:any){
    this.editarService.setMode("Edit")
    this.editarService.setInfo(edittrans)
  }


  Minar(transaction: any): void {
    const billDe = this.wallets.find((m) => m.wallet === transaction.from);
    const bill = this.wallets.find((m) => m.wallet === transaction.to);

    billDe[transaction.moneyType] =
    billDe[transaction.moneyType] - transaction.quantity;
    bill[transaction.moneyType] =
    bill[transaction.moneyType] + transaction.quantity;

    this.transaccionService
      .delete(transaction.id)
      .subscribe(() => this.getTransaccion());
    this.billeteraService
      .update(billDe.id, billDe)
      .subscribe((res) => this.getWallets());
    this.billeteraService
      .update(bill.id, bill)
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
