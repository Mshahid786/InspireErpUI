import { ProjectDescriptionMaster } from '../../../domain/ProjectDescriptionMaster';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { MenuItem } from 'primeng/api/menuitem';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-projectdescription',
  templateUrl: './projectdescription.component.html',
  styleUrls: ['./projectdescription.component.scss']
})
export class ProjectdescriptionComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private api: MasterApiService) {
                this.getAllProjectDescription();
               }
 title: string;
 breadcumbmodel: MenuItem[];
 projectdescriptionFormGroup: FormGroup;
 btnlabel: string = 'Submit';
 operation: {insert: boolean, update: boolean, delete: boolean} = {insert: false, update: false, delete: false};
 displayedColumns: string[] = ['code', 'name', 'rate', 'symbol', 'denomination', 'short_name', 'action'];
 projectdescriptionList: ProjectDescriptionMaster[] = [];
  ngOnInit(): void {
    this.operation.insert = true;
    this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
    this.projectdescriptionFormGroup = this.fb.group({

      projectDescriptionMasterProjectDescriptionId: [0],
      projectDescriptionMasterProjectDescriptionName: [null, [Validators.required]],
      projectDescriptionMasterProjectDescriptionSortOrder: [null],
      projectDescriptionMasterProjectDescriptionStatus: [false]
    });
  }

   public getAllProjectDescription() {
    this.api.GetAllProjectDesc().subscribe((data) => {
      this.projectdescriptionList = data;
    });
    }

    saveprojectdescription() {
      this.projectdescriptionFormGroup.markAsDirty();
      this.projectdescriptionFormGroup.markAllAsTouched();
      if (this.projectdescriptionFormGroup.valid) {
           if (this.operation.insert) {
             this.insertProjectDescription
             this.insertProjectDescription(this.projectdescriptionFormGroup.value);
      } else if (this.operation.update) {
        this.updateProjectDescription(this.projectdescriptionFormGroup.value);
      } else {
      }
      }

    }
     updateValues(data: ProjectDescriptionMaster) {
      this.operation = {insert: false, update: true, delete: false};
      this.btnlabel = 'Update';
      this.projectdescriptionFormGroup.patchValue(data);
     }
     removeprojectdescription(data: ProjectDescriptionMaster) {
      this.operation = {insert: true, update: false, delete: false};
      this.btnlabel = 'Submit';
      this.deleteProjectDescription(data);
    }
    public get f() {
      return this.projectdescriptionFormGroup.controls;
    }
    public  reset() {
      this.operation = {insert: true, update: false, delete: false};
      this.btnlabel = 'Submit';
      this.projectdescriptionFormGroup.reset();
    }

    public insertProjectDescription(projectdescription: ProjectDescriptionMaster ) {
      this.api.InsertProjectDesc(projectdescription).subscribe((data) => {
        this.projectdescriptionList = data;
        this.reset();
      });
    }


    public updateProjectDescription(projectdescription: ProjectDescriptionMaster ) {
      this.api.UpdateProjectDesc(projectdescription).subscribe((data) => {
        this.projectdescriptionList = data;
        this.reset();
      });
    }

    public deleteProjectDescription(projectdescription: ProjectDescriptionMaster ) {
      this.btnlabel = 'Submit';
      this.api.DeleteProjectDesc(projectdescription).subscribe((data) => {
        this.projectdescriptionList = data;
        this.reset();
      });
    }

}
