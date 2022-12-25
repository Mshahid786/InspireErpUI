import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import {BudgetMaster} from 'src/app/routes/domain';

import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private api: MasterApiService) {
      this.getBudgetList();
     }
  title:string;

  breadcumbmodel: MenuItem[];
  BudgetFormGroup: FormGroup;
  btnlabel: string = 'Submit';
  operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
  displayedColumns: string[] = ['code', 'name',  'short_name', 'action'];
  BudgetList: BudgetMaster[] = [];
   ngOnInit(): void {
     this.operation.insert = true;
     this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
     this.activatedroute.data.subscribe(data => {
       this.title = data.title;
   });
     this.BudgetFormGroup = this.fb.group({
      budgetMasterBudgetId: [0],
      budgetMasterBudgetName: [null, [Validators.required]]
    });
   }
 
    public getBudgetList() {
     this.api.GetAllBudget().subscribe((data) => {
       this.BudgetList = data;
     });
     }
 
     saveBudget() {
       this.BudgetFormGroup.markAsDirty();
       this.BudgetFormGroup.markAllAsTouched();
       if (this.BudgetFormGroup.valid) {
            if (this.operation.insert) {
         this.insertBudget(this.BudgetFormGroup.value);
       } else if (this.operation.update) {
         this.updateBudget(this.BudgetFormGroup.value);
       } else {
       }
       }
 
     }
      updateValues(data: BudgetMaster) {
       this.operation = {insert: false, update: true, delete: false};
       this.btnlabel = 'Update';
       this.BudgetFormGroup.patchValue(data);
      }
     removeBudget(data: BudgetMaster) {
       this.operation = {insert: true, update: false, delete: false};
       this.btnlabel = 'Submit';
       this.deleteBudget(data);
     }
     public get f() {
       return this.BudgetFormGroup.controls;
     }
     public  reset() {
       this.operation = {insert: true, update: false, delete: false};
       this.btnlabel = 'Submit';
       this.BudgetFormGroup.reset();
     }
 
     public insertBudget(Budget: BudgetMaster) {
       this.api.InsertBudget(Budget).subscribe((data) => {
         this.BudgetList = data;
         this.reset();
       });
     }
 
 
     public updateBudget(Budget: BudgetMaster) {
       this.api.UpdateBudget(Budget).subscribe((data) => {
         this.BudgetList = data;
         this.reset();
       });
     }
 
     public deleteBudget(Budget: BudgetMaster) {
       this.btnlabel = 'Submit';
       this.api.DeleteBudget(Budget).subscribe((data) => {
         this.BudgetList = data;
         this.reset();
       });
     }

}
