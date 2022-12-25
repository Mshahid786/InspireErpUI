import { BusinessTypeComponent } from './businesstype/businesstype.component';
import { ProjectdescriptionComponent } from './projectdescription/projectdescription.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { CurrencyComponent } from './currency/currency.component';
import { CountryComponent } from './country/country.component';
import { SupplierComponent } from './supplier/supplier.component';
import { LocationComponent } from './location/location.component';
import { CityComponent } from './city/city.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { BudgetComponent } from './budget/budget.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { JobtypeComponent } from './jobtype/jobtype.component';
import { AssetmanagmentComponent } from './assetmanagment/assetmanagment.component';
import { ChartofaccountComponent } from './chartofaccount/chartofaccount.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { PricelevelComponent } from './pricelevel/pricelevel.component';
import { EmailsettingsComponent } from './emailsettings/emailsettings.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { OffersComponent } from './offers/offers.component';
import { SalesprocessingComponent } from './salesprocessing/salesprocessing.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobComponent } from './job/job.component';
import { AccountmanualcodeentryComponent } from './accountmanualcodeentry/accountmanualcodeentry.component';
import { AssetchartComponent } from './assetchart/assetchart.component';
import { AssetregisterComponent } from './assetregister/assetregister.component';
import { BankguaranteeComponent } from './bankguarantee/bankguarantee.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DepreciationregisterComponent } from './depreciationregister/depreciationregister.component';
import { WorkgroupComponent } from './workgroup/workgroup.component';
import { PrimeModuleModule } from 'src/app/shared/module/prime-module/prime-module.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HotTableModule } from '@handsontable/angular';


@NgModule({
  declarations: [CurrencyComponent, CountryComponent,
     SupplierComponent, LocationComponent, CityComponent, TermsandconditionComponent, 
     BudgetComponent, CostcenterComponent, BusinessTypeComponent, JobtypeComponent
     , AssetmanagmentComponent, ChartofaccountComponent, 
      SalesmanComponent, PricelevelComponent, EmailsettingsComponent, LoyaltyComponent,
       OffersComponent, SalesprocessingComponent, PaymentmodeComponent, JobComponent,
        AccountmanualcodeentryComponent, AssetchartComponent, AssetregisterComponent,
         BankguaranteeComponent, ChangepasswordComponent, DepreciationregisterComponent,
          ProjectdescriptionComponent, WorkgroupComponent],
  imports: [
    CommonModule,
    SharedModule,
    PrimeModuleModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    MasterRoutingModule,
    HotTableModule
  ]
})
export class MasterModule { }
