import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotTableRegisterer } from '@handsontable/angular';
import { TranslateService } from '@ngx-translate/core';
import Handsontable from 'handsontable';
import { defaults } from 'src/app/shared/service/settings';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent implements OnInit {
title: string;
subtitle:string;
dataset: any;
index: number = 0;
  BForm: FormGroup;
  licensekey: any;
  gridHeader: string;
  handleChange(e) {
   this.index = e.index;
 }
 hotid = 'BalanceSheet';
 private hotRegisterer = new HotTableRegisterer();
 BalanceSheet: Handsontable.GridSettings;
 initializeControls() {
  this.BalanceSheet= {
    rowHeaders: true,
    viewportColumnRenderingOffset: 27,
    viewportRowRenderingOffset: 'auto',
    colWidths: [70,70],
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
        data: 'Particulars',
        type: 'numeric'
      },
      {
        data: 'Amount',
        type: 'numeric',
      } 
       
    ],
    colHeaders: [
      this.translate.instant('Particulars'),
      this.translate.instant('Amount'),
      
    ],
    manualRowMove: true,
    manualColumnMove: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
  }
}

  constructor(
    private activatedroute: ActivatedRoute,
    private  translate:TranslateService,
    private fb: FormBuilder,
  ) { }
  datedFrom:any;
  datedTo:any;
  ngOnInit(): void {
    this.datedFrom = new Date(new Date().setFullYear(new Date().getFullYear() - 5));        /////   Setting Defaults for Date
    this.datedTo = new Date();
    this.BForm = new FormGroup({
      DateFrom:new FormControl(this.datedFrom,Validators.required),
      DateTo:new FormControl(this.datedTo,Validators.required),
       
    });
    this.activatedroute.data.subscribe(data=>{
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.licensekey = defaults.hotlicensekey;
    this.gridHeader = "No Data";
 });
 this.initializeControls();
}
get f(){
  return this.BForm.controls;
}
}
