import { PrimeModuleModule } from 'src/app/shared/module/prime-module/prime-module.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountRoutingModule } from './../account/account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { CustomerquotationComponent } from './customerquotation/customerquotation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';


@NgModule({
  declarations: [CustomerquotationComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    AccountRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeModuleModule,
    ReactiveFormsModule,
    HotTableModule,
    FormsModule
  ]
})
export class SaleModule { }
