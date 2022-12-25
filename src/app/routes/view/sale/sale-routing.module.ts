import { CustomerquotationComponent } from './customerquotation/customerquotation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customerquotation',
    component: CustomerquotationComponent,
    data: { title: 'Customer Quotation', titleI18n: 'Customer Quotation' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
