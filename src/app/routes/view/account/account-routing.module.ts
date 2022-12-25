import { JournalinvoiceComponent } from './journalinvoice/journalinvoice.component';
import { PaymentVoucher } from 'src/app/routes/domain/PaymentVoucher';
import { ReceiptvoucherComponent } from './receiptvoucher/receiptvoucher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentvoucherComponent } from './paymentvoucher/paymentvoucher.component';
import { VoucherPrintingComponent } from './voucher-printing/voucher-printing.component';


const routes: Routes = [
  {
    path: 'paymentvoucher',
    component: PaymentvoucherComponent,
    data: { title: 'Payment Voucher', titleI18n: 'Payment Voucher' }
  },
  {
  path: 'receiptvoucher',
  component: ReceiptvoucherComponent,
  data: { title: 'Receipt Voucher', titleI18n: 'Receipt Voucher' }
},
{
  path: 'journalinvoice',
  component: JournalinvoiceComponent,
  data: { title: 'Journal Invoice', titleI18n: 'Journal Invoice' }
},
{
  path: 'voucherprinting',
  component: VoucherPrintingComponent,
  data: { title: 'Journal Invoice', titleI18n: 'Journal Invoice' }
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
