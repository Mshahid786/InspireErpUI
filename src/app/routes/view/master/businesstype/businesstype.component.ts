import { BusinessTypeMaster } from './../../../domain/BusinessTypeMaster';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { MenuItem } from 'primeng/api/menuitem';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-BusinessType',
  templateUrl: './businesstype.component.html',
  styleUrls: ['./businesstype.component.scss']
})
export class BusinessTypeComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private api: MasterApiService) {
                this.getAllBusinessType();
               }
 title: string;
 checked:boolean=true;
 breadcumbmodel: MenuItem[];
 businesstypeFormGroup: FormGroup;
 btnlabel: string = 'Submit';
 operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
 displayedColumns: string[] = ['code', 'name', 'status', 'action'];
 businesstypeList: BusinessTypeMaster[] = [];
  ngOnInit(): void {
    this.operation.insert = true;
    this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
    this.businesstypeFormGroup = this.fb.group({

      businessTypeMasterBusinessTypeId: [0],
      businessTypeMasterBusinessTypeName: [null, [Validators.required]],
      businessTypeMasterBusinessTypeStatus: [false]
    });
  }

   public getAllBusinessType() {
    this.api.GetAllBusinessType().subscribe((data) => {
      this.businesstypeList = data;
    });
    }

    savebusinesstype() {
      this.businesstypeFormGroup.markAsDirty();
      this.businesstypeFormGroup.markAllAsTouched();
      if (this.businesstypeFormGroup.valid) {
           if (this.operation.insert) {
             this.insertbusinesstype
             this.insertbusinesstype(this.businesstypeFormGroup.value);
      } else if (this.operation.update) {
        this.updateBusinessType(this.businesstypeFormGroup.value);
      } else {
      }
      }

    }
     updateValues(data: BusinessTypeMaster) {
      this.operation = {insert: false, update: true, delete: false};
      this.btnlabel = 'Update';
      this.businesstypeFormGroup.patchValue(data);
     }
     removebusinesstype(data: BusinessTypeMaster) {
      this.operation = {insert: true, update: false, delete: false};
      this.btnlabel = 'Submit';
      this.deleteBusinessType(data);
    }
    public get f() {
      return this.businesstypeFormGroup.controls;
    }
    public  reset() {
      this.operation = {insert: true, update: false, delete: false};
      this.btnlabel = 'Submit';
      this.businesstypeFormGroup.reset();
      this.f.businessTypeMasterBusinessTypeStatus.setValue(false);
      this.f.checked.setValue(true);
    }

    public insertbusinesstype(businesstype: BusinessTypeMaster ) {
      this.api.InsertBusinessType(businesstype).subscribe((data) => {
        this.businesstypeList = data;
        this.reset();
      });
    }


    public updateBusinessType(businesstype: BusinessTypeMaster ) {
      this.api.UpdateBusinessType(businesstype).subscribe((data) => {
        this.businesstypeList = data;
        this.reset();
      });
    }

    public deleteBusinessType(businesstype: BusinessTypeMaster ) {
      this.btnlabel = 'Submit';
      this.api.DeleteBusinessType(businesstype).subscribe((data) => {
        this.businesstypeList = data;businesstype
        this.reset();
      });
    }

}
