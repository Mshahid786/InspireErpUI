import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { PaymentvoucherComponent } from './paymentvoucher/paymentvoucher.component';
import { PrimeModuleModule } from 'src/app/shared/module/prime-module/prime-module.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HotTableModule } from '@handsontable/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReceiptvoucherComponent } from './receiptvoucher/receiptvoucher.component';
import { JournalinvoiceComponent } from './journalinvoice/journalinvoice.component';
import { VoucherPrintingComponent } from './voucher-printing/voucher-printing.component';
import { BalanceSheetComponent } from './BalanceSheet/Balance-Sheet.component';
import { AccountStatmentComponent } from './StatementOfAccounts/accountstatment.component';
import { StatementOfAccountSummaryService } from 'src/app/service/statement-of-account-summary.service';
@NgModule({
  declarations: [PaymentvoucherComponent, ReceiptvoucherComponent, JournalinvoiceComponent, VoucherPrintingComponent,BalanceSheetComponent,AccountStatmentComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeModuleModule,
    ReactiveFormsModule,
    HotTableModule,
    FormsModule
  ],
})
export class AccountModule { }
