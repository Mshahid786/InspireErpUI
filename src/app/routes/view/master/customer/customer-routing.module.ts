import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';


const routes: Routes = [
  {
    path: 'add',
    component: CustomerAddComponent,
    data: { title: 'Add Customer', titleI18n: 'Add Customer' },
  },
  {
    path: 'view',
    component: CustomerViewComponent,
    data: { title: 'View Customer', titleI18n: 'View Customer' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
