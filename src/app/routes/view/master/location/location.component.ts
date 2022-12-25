import { LocationMaster } from './../../../domain/LocationMaster';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private api: MasterApiService) {
      this.getLocationList();
     }
title: string;
breadcumbmodel: MenuItem[];
locationFormGroup: FormGroup;
btnlabel: string = 'Submit';
operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
displayedColumns: string[] = ['code', 'name', 'action'];
locationList: LocationMaster[] = [];
ngOnInit(): void {
  this.operation.insert = true;
  this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
  this.activatedroute.data.subscribe(data => {
    this.title = data.title;
});
this.locationFormGroup = this.fb.group({

locationMasterLocationId: [0],
locationMasterLocationName: [null, [Validators.required]],
locationMasterLocationAddress: [null],
locationMasterLocationDeleted: [null],
locationMasterLocationStatus: [false],
locationMasterLocationTelephone: [null],
locationMasterLocationFax: [null],
locationMasterLocationEmail: [null],
locationMasterLocationCashAccount: [null],
locationMasterLocationCostCenter: [null]

});
}

public get f() {
  return this.locationFormGroup.controls;
}

public getLocationList() {
this.api.GetAllLocation().subscribe((data) => {
this.locationList = data;
});
}

saveLocation() {
this.locationFormGroup.markAllAsTouched();
if (this.operation.insert) {
this.insertLocation(this.locationFormGroup.value);
} else if (this.operation.update) {
this.updateLocation(this.locationFormGroup.value);
} else {
//this.toast.error('Currency Master Save Failed');
}
}
updateValues(data: LocationMaster) {
this.operation = {insert: false, update: true, delete: false};
this.locationFormGroup.patchValue(data);
this.btnlabel='Update'
}
removeLocation(data: LocationMaster) {
this.operation = {insert: true, update: false, delete: false};
this.deleteLocation(data);
}
public get() {
return this.locationFormGroup.controls;
}
public  reset() {
this.operation = {insert: true, update: false, delete: false};
this.btnlabel='Submit'
this.locationFormGroup.reset();
this.f.locationMasterLocationStatus.setValue(false);
}

public insertLocation(location: LocationMaster) {
this.api.InsertLocation(location).subscribe((data) => {
this.locationList = data;
this.reset();
//this.toast.success('Inserted Succesfully');
});
}


public updateLocation(location: LocationMaster) {
this.api.UpdateLocation(location).subscribe((data) => {
this.locationList = data;
this.reset();
//this.toast.success('Updated Succesfully');
});
}

public deleteLocation(location: LocationMaster) {
this.api.DeleteLocation(location).subscribe((data) => {
this.locationList = data;
//this.toast.success('Deleted Succesfully');
});
}

}
