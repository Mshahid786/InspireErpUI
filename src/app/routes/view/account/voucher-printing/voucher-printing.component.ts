import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotTableRegisterer } from '@handsontable/angular';
import { TranslateService } from '@ngx-translate/core';
import Handsontable from 'handsontable';
import { VoucherPrintingServiceService } from 'src/app/service/voucher-printing-service.service';
import { defaults } from 'src/app/shared/service/settings';



@Component({
  selector: 'app-voucher-printing',
  templateUrl: './voucher-printing.component.html',
  styleUrls: ['./voucher-printing.component.scss']
})
export class VoucherPrintingComponent implements OnInit {
  title: string;
  subtitle: string;
  Submitted = false;
  dataset: any;
  Form: FormGroup;
  cols: Array<any>; 

  constructor(
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private translate: TranslateService,
    private voucherPrinting:VoucherPrintingServiceService
  ) { }


  

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
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
      this.subtitle = data.title;
      this.licensekey = defaults.hotlicensekey;
      this.gridHeader = "No Data";
    });
    this.getVoucherPrinting();
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
  VoucherPrinting: Handsontable.GridSettings;
  
  initializeControls() {
    this.VoucherPrinting = {
      // other properties
      data: this.dataset,
      // other properties
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

      Vouchers_Numbers_From_Date : '2022/01/01',
      Vouchers_Numbers_To_Date : '2022/12/31',
      Vouchers_Numbers_Cheque_NO : 'All',
      Vouchers_Numbers_from_V_NO : 'All',
      Vouchers_Numbers_To_V_NO : 'All',
      Vouchers_Numbers_VSNO : 'All',
      Vouchers_Numbers_V_NO : 'All',
      Vouchers_Numbers_V_NO_NU : 'All',
      Vouchers_Numbers_V_Type : 'All',
      Vouchers_Numbers_FSNO : 'All',
      Vouchers_Numbers_Status : 'All',
      Vouchers_Numbers_LocationID : 'All',
      Vouchers_Numbers_VoucherDate :'All',
      Vouhers_Numbers_DelStatus : 'All'
      //Vouchers_Numbers_V_NO : 'abcde'
     
    }
    this.apiResponse = this.voucherPrinting.GetVoucherPrinting(payload).subscribe((data)=>{
      console.log('Called');
      this.dataset = data;
    });
    
    
     



  }


}

