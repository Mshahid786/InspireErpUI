import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'list'
}, {
  path: 'entry/:id',
  component: EntryComponent,
  data: { title: 'Item Master Entry', titleI18n: 'Item Master Entry' }
}, {
  path: 'list',
  component: ListComponent,
  data: { title: 'Item Master List', titleI18n: 'Item Master List' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemMasterRoutingModule { }
