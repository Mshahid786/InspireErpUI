import { CurrencyMaster } from './../../../domain/CurrencyMaster';
import { CityMaster } from './../../../domain/CityMaster';
import { CountryMaster } from './../../../domain/CountryMaster';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { MenuItem } from 'primeng/api/menuitem';
import { map } from 'rxjs/operators';
import {SupplierMaster} from 'src/app/routes/domain';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private api: MasterApiService) {
      this.getSupplierList();
     }
title: string;
breadcumbmodel: MenuItem[];
supplierFormGroup: FormGroup;
btnlabel: string = 'Submit';
operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
displayedColumns: string[] = ['code', 'name',  'Mobile', 'Status', 'action'];

SupplierList: SupplierMaster[] = [];

countryListNew: SelectItem[]=[];
citylistNew: SelectItem[]=[];
currencylistNew:SelectItem[];

countryList: CountryMaster[];
cityList: CityMaster[];
currencyList: CurrencyMaster[];
ngOnInit(): void {
this.operation.insert = true;
this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
this.activatedroute.data.subscribe(data => {
this.title = data.title;
this.getCountryList();
this.getCurrencyList();
this.getCityList();
});

this.supplierFormGroup = this.fb.group({
SuppliersMasterSupplierId : [0],
SuppliersMasterSupplierName:[null,[Validators.required]],
SuppliersMasterSupplierContactPerson:[null],
SuppliersMasterSupplierCountryId:[null],
SuppliersMasterSupplierCityId:[null],
SuppliersMasterSupplierPoBox:[null],
SuppliersMasterSupplierTel1:[null],
SuppliersMasterSupplierTel2:[null],
SuppliersMasterSupplierFax:[null],
SuppliersMasterSupplierMobile:[null],
SuppliersMasterSupplierEmail:[null],
SuppliersMasterSupplierWebSite:[null],
SuppliersMasterSupplierLocation:[null,[Validators.required]],
SuppliersMasterSupplierRemarks:[null],
SuppliersMasterSupplierReffAcNo:[null],
SuppliersMasterSupplierType:[null],
SuppliersMasterSupplierUserId:[null],
SuppliersMasterSupplierCurrencyId:[null],
SuppliersMasterSupplierConsup:[null],
SuppliersMasterSupplierCrl:[null],
SuppliersMasterSupplierStatus: [false],
SuppliersMasterSupplierDeleteStatus:[null],
SuppliersMasterSupplierStatusValue:[null],
SuppliersMasterSupplierPaymentTerms:[null],
SuppliersMasterSupplierCreditDays:[null],
SuppliersMasterSupplierCreditLimit:[null],
SuppliersMasterSupplierVatNo:[null],
cityMasterCityCountryId:[],
cityMasterCityCityId:[],
CurrencyMasterCurrencyId:[],
suppliersMasterSupplierStatus: []
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
   this.countryListNew.unshift({label: 'Select',value:-1})
  });

  }


  public getCityList() {
    this.api.GetAllCity().subscribe((data) => {
    this.cityList = data;
    this.citylistNew = data.map(item =>
      ({
       label: item.cityMasterCityName,
       value: item.cityMasterCityId
     }));
     this.citylistNew.unshift({label: 'Select',value:-1})

    });
  }

  public getCurrencyList() {
    this.api.GetAllCurrency().subscribe((data) => {
      this.currencyList = data;
      this.currencylistNew = data.map(item =>
        ({
         label: item.currencyMasterCurrencyName,
         value: item.currencyMasterCurrencyId
       }));
       this.currencylistNew.unshift({label: 'Select',value:-1})
      });
    }

  public getSupplierList() {
    this.api.GetAllSupplier().subscribe((data) => {
    this.SupplierList = data;
    });
    }


saveSupplier() {
this.supplierFormGroup.markAsDirty();
this.supplierFormGroup.markAllAsTouched();
if (this.supplierFormGroup.valid) {
 if (this.operation.insert) {
this.insertSupplier(this.supplierFormGroup.value);
} else if (this.operation.update) {
this.updateSupplier(this.supplierFormGroup.value);
} else {
}
}

}
updateValues(data: SupplierMaster) {
this.operation = {insert: false, update: true, delete: false};
this.btnlabel = 'Update';
this.supplierFormGroup.patchValue(data);
}
removeSupplier(data: SupplierMaster) {
this.operation = {insert: true, update: false, delete: false};
this.btnlabel = 'Submit';
this.deleteSupplier(data);
}
public get f() {
return this.supplierFormGroup.controls;
}
public  reset() {
this.operation = {insert: true, update: false, delete: false};
this.btnlabel = 'Submit';
this.supplierFormGroup.reset();
}

public insertSupplier(Supplier: SupplierMaster) {
this.api.InsertSupplier(Supplier).subscribe((data) => {
this.SupplierList = data;
this.reset();
});
}


public updateSupplier(Supplier: SupplierMaster) {
this.api.UpdateSupplier(Supplier).subscribe((data) => {
this.SupplierList = data;
this.reset();
});
}

public deleteSupplier(Supplier: SupplierMaster) {
this.btnlabel = 'Submit';
this.api.DeleteSupplier(Supplier).subscribe((data) => {
this.SupplierList = data;
this.reset();
});
}


onCountryChange(event){
  console.log(event);
  this.citylistNew = this.cityList.filter(k => k.cityMasterCityCountryId == Number(event.value)).map(item =>
    ({
     label: item.cityMasterCityName,
     value: item.cityMasterCityId
   }));
   this.citylistNew.unshift({label: 'Select',value:-1})
}
}
