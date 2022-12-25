import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
//import { CountryMaster } from 'src/app/routes/domain';
import {CountryMaster} from 'src/app/routes/domain';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private api: MasterApiService) {
      this.getCountryist();
     }
title: string;
breadcumbmodel: MenuItem[];
//title: string;
countryFormGroup: FormGroup;
btnlabel: string = 'Submit';
operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
displayedColumns: string[] = [ 'code','name', 'action'];
countryList: CountryMaster[] = [];
ngOnInit(): void {
  this.operation.insert = true;
    this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
});
this.countryFormGroup = this.fb.group({
  countryMasterCountryId: [0],
  countryMasterCountryName: [null, [Validators.required]],
  countryMasterCountryISDCode: [null],
  countryMasterCountryUserID: [null],
  countryMasterCountryStatus: [null],
  countryMasterCountryAmount: [null]
});
}

public getCountryist() {
this.api.GetAllCountry().subscribe((data) => {
this.countryList = data;
});
}

public get f() {
  return this.countryFormGroup.controls;
}

saveCountry() {
this.countryFormGroup.markAllAsTouched();
if (this.operation.insert) {
this.insertCountry(this.countryFormGroup.value);
} else if (this.operation.update) {
this.updateCountry(this.countryFormGroup.value);
} else {
//this.toast.error('Country Master Save Failed');
}
}
updateValues(data: CountryMaster) {
this.operation = {insert: false, update: true, delete: false};
this.countryFormGroup.patchValue(data);
}
removeCountry(data: CountryMaster) {
this.operation = {insert: true, update: false, delete: false};
this.deleteCountry(data);
}
public get() {
return this.countryFormGroup.controls;
}
public  reset() {
this.operation = {insert: true, update: false, delete: false};
this.countryFormGroup.reset();
}

public insertCountry(country: CountryMaster) {

this.api.InsertCountry(country).subscribe((data) => {
this.countryList = data;
//this.toast.success('Inserted Succesfully');
this.countryFormGroup.reset();
});
}


public updateCountry(country: CountryMaster) {
this.api.UpdateCountry(country).subscribe((data) => {
this.countryList = data;
//this.toast.success('Updated Succesfully');
});
}

public deleteCountry(country: CountryMaster) {
this.api.DeleteCountry(country).subscribe((data) => {
this.countryList = data;
//this.toast.success('Deleted Succesfully');
});
}

}
