import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemMasterRoutingModule } from './item-master-routing.module';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeModuleModule } from 'src/app/shared/module/prime-module/prime-module.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EntryComponent, ListComponent],
  imports: [
    CommonModule,
    ItemMasterRoutingModule,
    SharedModule,
    TranslateModule,
    PrimeModuleModule,
    ReactiveFormsModule,
    HotTableModule,
    FormsModule
  ]
})
export class ItemMasterModule { }
