 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { ActivatedRoute } from '@angular/router';
 import { HotTableRegisterer } from '@handsontable/angular';
 import { TranslateService } from '@ngx-translate/core';
 import Handsontable from 'handsontable';
 import { VoucherPrintingServiceService } from 'src/app/service/voucher-printing-service.service';
 import { defaults } from 'src/app/shared/service/settings';
 //import { map, filter } from 'rxjs/operators';
 import { map } from 'rxjs/operators';
 
 @Component({
   selector: 'app-voucher-printing',
   templateUrl: './voucher-printing.component.html',
   styleUrls: ['./voucher-printing.component.scss']
 })
 export class VoucherPrintingComponent implements OnInit {
    VoucherPrinting: Handsontable.GridSettings;
    title: string;
    subtitle: string;
    Submitted = false;
    dataset: any;
   //dataset = [];
    Form: FormGroup;
    cols: Array<any>; 
  
   constructor(
     private activatedroute: ActivatedRoute,
     private fb: FormBuilder,
     private translate: TranslateService,
     private voucherPrinting:VoucherPrintingServiceService
     
   ) {this.licensekey = defaults.hotlicensekey;}

   ngOnInit(): void {
     this.Form = new FormGroup({
       ChequeNo: new FormControl('', Validators.required),
       narration: new FormControl('', Validators.required),
       VoucherType: new FormControl('', Validators.required),
       FormVoucher: new FormControl('', Validators.required),
       ToVoucher: new FormControl('', Validators.required),
       DateFrom: new FormControl('', Validators.required),
       DateTo: new FormControl('', Validators.required)


     });

// "AccountsTransactions_TransSno": 354,
          // "AccountsTransactions_TransDate": "2021-03-30T00:00:00",
          // "AccountsTransactions_CheqNo": null,
          // "Vouchers_Numbers_V_NO_NU": 3.0,
          // "AccountsTransactions_VoucherType": "CreditNote",
          // "AccountsTransactions_VoucherNo": "CN3",
          // "MA_AccName": "Main Cash",
          // "AccountsTransactions_Particulars": "saedfas",
          // "AccountsTransactions_Debit": 0.0000,
          // "AccountsTransactions_Credit": 156.0000


     this.cols = [
      { field: 'paymentVoucherVoucherNo', header: 'Voucher No'},
      { field: 'paymentVoucherDate', header: 'Date' },
      { field: 'paymentVoucherCrAcNo', header: 'Account' },
      { field: 'paymentVoucherCurrencyId', header: 'Currency' },
      { field: 'paymentVoucherDbAmount', header: 'Vchr.Debit' },
      { field: 'paymentVoucherCrAmount', header: 'Vchr.Credit' },
      { field: 'paymentVoucherNarration', header: 'Particulars' },
      { field: 'paymentVoucherDbAmount', header: 'Dtls.Debit' },
      { field: 'paymentVoucherCrAmount', header: 'Dtls.Credit' }
  ];


     this.activatedroute.data.subscribe(data => {
       this.title = data.title;
       this.subtitle = data.title;
       this.licensekey = defaults.hotlicensekey;
       this.gridHeader = "No Data";
     });
     this.initializeControls()
   }

  

   index: number = 0;
   licensekey: string;
   gridHeader: string;
   handleChange(e) {
     this.index = e.index;
   }
   hotid = 'VoucherPrinting';
   private hotRegisterer = new HotTableRegisterer();
  
   initializeControls() {
  
     this.VoucherPrinting = {
      rowHeaders: true,
      viewportColumnRenderingOffset: 27,
      viewportRowRenderingOffset: 'auto',
      colWidths: '150px',
      minRows:  2,
      width: 'auto',
      height: 200,
      rowHeights: 23,
      fillHandle: {
        direction: 'vertical',
        autoInsertRow: true
      },
      data: [
        
      ],
      minSpareRows: 1,
      // allowInsertColumn: false,
      allowInsertRow: true,
      // allowRemoveColumn: false,
      // allowRemoveRow: false,
      // autoWrapRow: false,
      // autoWrapCol: false,
       stretchH: 'all',
      //  autoWrapRow: true,
      // height: 487,
      // maxRows: 22,
      manualRowResize: true,
      manualColumnResize: true,
      hiddenColumns: {
        columns: [5],
        indicators: false
      },
      // rowHeaders: true,
       columns: [
          {
            readOnly: true,
            data: 'AccountsTransactions_VoucherType',
            type: 'text',
          },
          {
            readOnly: true,
            data: 'AccountsTransactions_VoucherNo',
            type: 'text',
          },
          {
            readOnly: true,
            data: 'MA_AccName',
            type: 'text',
          },
          {
            readOnly: true,
            data: 'AccountsTransactions_Particulars',
            type: 'text',
          },
          {
            readOnly: true,
            data: 'AccountsTransactions_Debit',
            type: 'text',
          },
          {
            readOnly: true,
            data: 'AccountsTransactions_Credit',
            type: 'text',
          },
        ],
        colHeaders: [
          this.translate.instant('Voucher Type'),
          this.translate.instant('Voucher No'),
          this.translate.instant('Account Name'),
          this.translate.instant('Particulars'),
          this.translate.instant('Debit'),
          this.translate.instant('Credit'),
        ],
      manualRowMove: true,
      manualColumnMove: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: false,
    };
   }

   get f() {
     return this.Form.controls;
   }
   apiResponse:any;
   formSubmit() {
     this.Submitted = true;
   }
   getVoucherPrinting(){
       let payload = {
       Vouchers_Numbers_from_V_NO : 'All',
       Vouchers_Numbers_To_V_NO : 'All',
       Vouchers_Numbers_V_Type : 'All',
       Vouchers_Numbers_From_Date : '2020-06-08 20:30:00.000',
       Vouchers_Numbers_To_Date : '2022-06-07 00:00:00.000',
       Vouchers_Numbers_Cheque_NO : 'All',
       Vouchers_Numbers_V_NO_NU : 'All'
     }
    
     this.apiResponse = this.voucherPrinting.GetVoucherPrinting(payload).subscribe((data:any)=> 
     {
      const readableData = JSON.parse(data?.result);
      this.dataset = readableData.Table; 
      this.hotRegisterer.getInstance(this.hotid).updateSettings({data:this.dataset});
     });
   }
 }

 interface GridData 
     {
     
      VoucherType?: string;
      VocherNo?: string;
      AccName?: string;
      Particular?: string;
      Debit?: number;
      Credit?: number;

    }