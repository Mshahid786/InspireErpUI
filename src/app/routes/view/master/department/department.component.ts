import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { DepartmentMaster } from 'src/app/routes/domain';
import { MenuItem } from 'primeng/api/menuitem';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
             private api: MasterApiService) {
               this.getDepartmentList();
              }
              title: string;
              breadcumbmodel: MenuItem[];
              departmentFormGroup: FormGroup;
              btnlabel: string = 'Submit';
              operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
              displayedColumns: string[] = ['code', 'department'];
              departmentList: DepartmentMaster[] = [];       
  ngOnInit(): void {
    this.operation.insert = true;
    this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label:k}));
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  this.departmentFormGroup = this.fb.group({
    departmentMasterDepartmentId: [0],
    departmentMasterDepartmentCode: [null, [Validators.required]],
    departmentMasterDepartmentName: [null, [Validators.required]],
    departmentMasterDepartmentDeleted: [null],
    departmentMasterDepartmentStatus: [false]
  });
}

    public getDepartmentList() {
    this.api.GetAllDepartment().subscribe((data) => {
    this.departmentList = data;
   });
   }

   saveDepartment() {
    this.departmentFormGroup.markAsDirty();
    this.departmentFormGroup.markAllAsTouched();
    if (this.departmentFormGroup.valid) {
         if (this.operation.insert) {
      this.insertDepartment(this.departmentFormGroup.value);
    } else if (this.operation.update) {
      this.updateDepartment(this.departmentFormGroup.value);
    } else {
    }
    }

  }

  updateValues(data: DepartmentMaster) {
    this.operation = {insert: false, update: true, delete: false};
    this.btnlabel = 'Update';
    this.departmentFormGroup.patchValue(data);
   }
   removeDepartment(data: DepartmentMaster) {
    this.operation = {insert: true, update: false, delete: false};
    this.btnlabel = 'Submit';
    this.deleteDepartment(data);
  }
  public get f() {
    return this.departmentFormGroup.controls;
  }
  public  reset() {
    this.operation = {insert: true, update: false, delete: false};
    this.btnlabel = 'Submit';
    this.departmentFormGroup.reset();
  }

  public insertDepartment(department: DepartmentMaster) {
    this.api.InsertDepartment(department).subscribe((data) => {
      this.departmentList = data;
      this.reset();
    });
  }

  public updateDepartment(department: DepartmentMaster) {
    this.api.UpdateDepartment(department).subscribe((data) => {
      this.departmentList = data;
      this.reset();
    });
  }

  public deleteDepartment(department: DepartmentMaster) {
    this.btnlabel = 'Submit';
    this.api.DeleteDepartment(department).subscribe((data) => {
      this.departmentList = data;
      this.reset();
    });
  }

}
