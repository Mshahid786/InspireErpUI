import { SalesManMaster } from './../../../domain/SalesManMaster';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.scss']
})
export class SalesmanComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private api: MasterApiService) {
      this.getSalesmanList();
     }
title: string;
salesmanFormGroup: FormGroup;
btnlabel: string = 'Submit';
operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
displayedColumns: string[] = [ 'salesman_code','salesman_name','contact_number', 'action'];
salesmanList: SalesManMaster[] =[];
breadcumbmodel: MenuItem[];
ngOnInit(): void {
  this.operation.insert = true;
  this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
  this.activatedroute.data.subscribe(data => {
    this.title = data.title;
});
this.salesmanFormGroup = this.fb.group({
  salesManMasterSalesManId: [0],
  salesManMasterSalesManName: [null, [Validators.required]],
  salesManMasterSalesManDeleted: [null],
  salesManMasterSalesManContactNo: [null],
  salesManMasterSalesManLocationId: [null]
});
}



public getSalesmanList() {
this.api.GetAllSalesman().subscribe((data) => {
this.salesmanList = data;
});
}



saveSalesman() {
this.salesmanFormGroup.markAllAsTouched();
if (this.operation.insert) {
this.insertSalesman(this.salesmanFormGroup.value);
} else if (this.operation.update) {
this.updateSalesman(this.salesmanFormGroup.value);
} else {
//this.toast.error('Country Master Save Failed');
}
}
updateValues(data: SalesManMaster) {
this.operation = {insert: false, update: true, delete: false};
this.salesmanFormGroup.patchValue(data);
}
removeSalesman(data: SalesManMaster) {
this.operation = {insert: true, update: false, delete: false};
this.deleteSalesman(data);
}

public get f() {
return this.salesmanFormGroup.controls;
}

public  reset() {
this.operation = {insert: true, update: false, delete: false};
this.salesmanFormGroup.reset();
}

public insertSalesman(salesman: SalesManMaster) {

this.api.InsertSalesman(salesman).subscribe((data) => {
this.salesmanList = data;
//this.toast.success('Inserted Succesfully');
this.salesmanFormGroup.reset();
});
}


public updateSalesman(salesman: SalesManMaster) {
this.api.UpdateSalesman(salesman).subscribe((data) => {
this.salesmanList = data;
//this.toast.success('Updated Succesfully');
});
}

public deleteSalesman(salesman: SalesManMaster) {
this.api.DeleteSalesman(salesman).subscribe((data) => {
this.salesmanList = data;
//this.toast.success('Deleted Succesfully');
});
}
}
