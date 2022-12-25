import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { EquipmentComponent } from './equipment/equipment.component';
import { UnitComponent } from './unit/unit.component';
import { MakeComponent } from './make/make.component';
import { TypeComponent } from './type/type.component';


@NgModule({
  declarations: [EquipmentComponent, UnitComponent, MakeComponent, TypeComponent],
  imports: [
    CommonModule,
    CodeRoutingModule
  ]
})
export class CodeModule { }
