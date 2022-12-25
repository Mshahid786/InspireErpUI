import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentComponent } from './equipment/equipment.component';
import { MakeComponent } from './make/make.component';
import { TypeComponent } from './type/type.component';
import { UnitComponent } from './unit/unit.component';


const routes: Routes = [

  {
    path: 'equipment',
    component: EquipmentComponent,
    data: { title: 'Equipment Master', titleI18n: 'Equipment Master' },
  },
  {
    path: 'make',
    component: MakeComponent,
    data: { title: 'Make Master', titleI18n: 'Make Master' },
  },
  {
    path: 'type',
    component: TypeComponent,
    data: { title: 'Type Master', titleI18n: 'Make Master' },
  },
  {
    path: 'unit',
    component: UnitComponent,
    data: { title: 'Unit Master', titleI18n: 'Make Master' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
