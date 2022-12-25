import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { CityMaster } from 'src/app/routes/domain';
import { CountryMaster } from 'src/app/routes/domain';
import { MenuItem } from 'primeng/api/menuitem';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private api: MasterApiService) {
      this.getCityList();
     }
selectedCountry: any;

title: string;
breadcumbmodel: MenuItem[];
cityFormGroup: FormGroup;
btnlabel: string = 'Submit';
operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
displayedColumns: string[] = [ 'code','name', 'action'];
cityList: CityMaster[] =[];
countryListNew: SelectItem[];
countryList: CountryMaster[] = [];
ngOnInit(): void {

  this.operation.insert = true;
  this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
  this.activatedroute.data.subscribe(data => {
  this.title = data.title;
  this.getCountryList();

});
this.cityFormGroup = this.fb.group({
  cityMasterCityId: [0],
  cityMasterCityCountryId: [-1, [Validators.required]],
  cityMasterCityName: [null],
  cityMasterCityDeleted: [null],
  cityMasterCityStatus: [null],
  cityCountryID:[0]
});
}



  public getCountryList() {
    this.api.GetAllCountry().subscribe((data) => {
    this.countryList = data;

    this.countryListNew = data.map(item =>
      ({
       label: item.countryMasterCountryName,
       value: item.countryMasterCountryId
     }));
     this.countryListNew.push({label: 'Select',value:-1})
    });


    }

public getCityList() {
this.api.GetAllCity().subscribe((data) => {
this.cityList = data;
});
}

saveCity() {
this.cityFormGroup.markAllAsTouched();
if (this.operation.insert) {
this.insertCity(this.cityFormGroup.value);
} else if (this.operation.update) {
this.updateCity(this.cityFormGroup.value);
} else {
//this.toast.error('Country Master Save Failed');
}
}
updateValues(data: CityMaster) {
this.operation = {insert: false, update: true, delete: false};
this.cityFormGroup.patchValue(data);
}
removeCity(data: CityMaster) {
this.operation = {insert: true, update: false, delete: false};
this.deleteCity(data);
}
public get f() {
return this.cityFormGroup.controls;
}
public  reset() {
this.operation = {insert: true, update: false, delete: false};
this.cityFormGroup.reset();
this.f.cityMasterCityCountryId.setValue(-1);
}

public insertCity(city: CityMaster) {

this.api.InsertCity(city).subscribe((data) => {
this.cityList = data;
this.reset();
});
}


public updateCity(city: CityMaster) {
this.api.UpdateCity(city).subscribe((data) => {
this.cityList = data;
this.reset();
//this.toast.success('Updated Succesfully');
});
}

public deleteCity(city: CityMaster) {
this.api.DeleteCity(city).subscribe((data) => {
this.cityList = data;
this.reset();
//this.toast.success('Deleted Succesfully');
});
}

}
