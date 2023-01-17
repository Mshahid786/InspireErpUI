import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotTableRegisterer } from '@handsontable/angular';
import { TranslateService } from '@ngx-translate/core';
import Handsontable from 'handsontable';
import { StatementOfAcocuntService } from 'src/app/routes/service/statement-of-acocunt.service';
import { StatementOfAccountSummaryService } from 'src/app/service/statement-of-account-summary.service';
import { defaults } from 'src/app/shared/service/settings';

@Component({
  selector: 'app-accountstatment',
  templateUrl: './accountstatment.component.html',
  styleUrls: ['./accountstatment.component.scss'],
  
})
export class AccountStatmentComponent implements OnInit {
  title: string;
  subtitle: string;
  Submitted = false;
  dataset: any;
  ASForm: FormGroup;
  cols: Array<any>; 

  constructor(
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private translate: TranslateService,
    private accService:StatementOfAcocuntService
  ) { }
  ngOnInit(): void {

    this.GetAccStatementSummary();

    this.ASForm = new FormGroup({
      SelectAccount: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      Job: new FormControl('', Validators.required),
      DateForm: new FormControl('', Validators.required),
      Summary: new FormControl('', Validators.required)

    });
    this.activatedroute.data.subscribe(data => 
    {
      this.title = data.title;
      this.subtitle = data.title;
      this.licensekey = defaults.hotlicensekey;
      this.gridHeader = "No Data";
    });
    this.initializeControls()
  }
  GetAccStatementSummary()
  {
    let payload:any = {
      AcNo:'IN45',
      StartDate: new Date('2020-08-19 00:00:00.000')
    }
    console.log(payload);
    let x = this.accService.GetStatementOfAccountSummary(payload).subscribe((response:any)=>{
      this.dataset = response;
      console.log('Api Respose : ',response);
    });
  }
  index: number = 0;
  licensekey: string;
  gridHeader: string;
  handleChange(e) {
    this.index = e.index;
  }
  hotid = 'accountstatment';
  private hotRegisterer = new HotTableRegisterer();
  accountstatment: Handsontable.GridSettings;
  initializeControls() {
    this.accountstatment = {
      rowHeaders: true,
      viewportColumnRenderingOffset: 27,
      viewportRowRenderingOffset: 'auto',
      colWidths: [30,30,45,70,40,40,50,40,20,50],
      minRows: 3,
      width: '100%',
      height: 300,
      rowHeights: 23,
      fillHandle: {
        direction: 'vertical',
        autoInsertRow: true
      },
      data: [],
      minSpareRows: 1,
      allowInsertRow: true,
      // allowInsertColumn: false,
      // allowRemoveColumn: false,
      // allowRemoveRow: false,
      // autoWrapRow: false,
      // autoWrapCol: false,
      //  autoWrapRow: true,
      // height: 487,
      // maxRows: 22,
      stretchH: "all",
      manualRowResize: true,
      manualColumnResize: true,
      columns: [
        
        {
          data: 'V No',
          type: 'text'
        },
        {
          data: 'Date',
          type: 'text'
        },
        {
          data: 'V Type',
          type: 'text'
        },
        {
          data: 'Description',
          type: 'text'
        },
        {
          data: 'Debit',
          type: 'text'
        },
        {
          data: 'Credit',
          type: 'numeric'
        },
        {
          data: 'Running Balance',
          type: 'text',
        },
        {
          data: 'Ref No',
          type: 'numeric'
        },
        {
          data: 'Days',
          type: 'numeric'
        },
        {
          data: 'Cost Center',
          type: 'numeric'
        }
      ],
      colHeaders: [
        this.translate.instant('V No'),
        this.translate.instant('Date'),
        this.translate.instant('V Type'),
        this.translate.instant('Description'),
        this.translate.instant('Debit'),
        this.translate.instant('Credit'),
        this.translate.instant('Running Balance'),
        this.translate.instant('Ref No'),
        this.translate.instant('Days'),
        this.translate.instant('Cost Center'),
      ],
      manualRowMove: true,
      manualColumnMove: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true,
    }
    //this.initializeControls()
  }
  get f(){
    return this.ASForm.controls;
  }
}