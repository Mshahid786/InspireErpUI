import { CustomerMaster } from './../../../domain/CustomerMaster';
import { UnitComponent } from './../../master/code/unit/unit.component';
import { CustomerQuotationDetails } from './../../../domain/CustomerQuotationDetails';
import { LocationMaster } from './../../../domain/LocationMaster';
import { SalesManMaster } from './../../../domain/SalesManMaster';
import { CustomerQuotation } from './../../../domain/CustomerQuotation';
import { ItemMaster } from './../../../domain/ItemMaster';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MasterApiService } from 'src/app/routes/service/master.api.services';
import { MenuItem } from 'primeng/api/menuitem';
import Handsontable from 'handsontable';
import { defaults } from 'src/app/shared/service/settings';
import { TranslateService } from '@ngx-translate/core';
import { AccountApiService } from 'src/app/routes/service/account.api.service';
import {SelectItem, MessageService, ConfirmationService} from 'primeng/api';
import { AccountsTransactions } from 'src/app/routes/domain/AccountsTransactions';
import { HotTableRegisterer } from '@handsontable/angular';
import { DropDownValidator } from 'src/app/shared/validator/customvalidtor';
import { timer, Observable } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-customerquotation',
  templateUrl: './customerquotation.component.html',
  styleUrls: ['./customerquotation.component.scss']
})
export class CustomerquotationComponent implements OnInit {

  confirmDropDatabaseDialogVisible = false;
  title: string;
  search: string = null;
  index: number = 0;
  displayMaximizable: boolean;
  breadcumbmodel: MenuItem[];
  licensekey: string;

  btnFlag: ButtonFlag;
  currencyList: SelectItem[];
  currArry: string[] = [];

  itemArray: ItemMaster[] = [];
  itemArry: string[] = [];
  itemList: SelectItem[];

  invoiceList: SelectItem[];

  customerArray: CustomerMaster[] = [];
  customerArry: string[] = [];
  customerList: SelectItem[];

  locationArray: LocationMaster[] = [];
  locationList: SelectItem[] = [];
  locationArry: string[] = [];

  salesManArray: SalesManMaster[] = [];
  salesManList: SelectItem[] = [];
  salesManArry: string[] = [];

  customerQuotationarry: CustomerQuotation[] = [];

  // savedPaymentVoucherGridData: GridData[] = [];
  savedCustomerQuotation: CustomerQuotation;

  private hotRegisterer = new HotTableRegisterer();
  hotid = 'customerQuotationEntry';
  constructor(private activatedroute: ActivatedRoute,
              private messageService: MessageService,
              private fb: FormBuilder,
              private confirmation: ConfirmationService,
              private translate: TranslateService,
              private router: Router,
              private masterapi: MasterApiService,
              private accountapi: AccountApiService)           
              {
                this.licensekey = defaults.hotlicensekey;
               }


  customerQuotationentry: Handsontable.GridSettings ;
  customerQuotationFormGroup: FormGroup;
  // accountTransactionDataset = [];
cols;


ngOnInit(): void {
  this.cols = [
    { field: 'customerQuotationQuotationID', header: 'Quotaiton No'},
    { field: 'customerQuotationDate', header: 'Quotation Date' },
    { field: 'customerQuotationDeliveryTime', header: 'Quotation Delivery Time' },
    { field: 'customerQuotationQuotationValidDate', header: 'Quotation Valid Date' },
    { field: 'customerQuotationVoucherType', header: 'Invoice Type' },
    { field: 'customerQuotationLocation', header: 'Location' },
    { field: 'customerQuotationContactPersonV', header: 'Contact Person' },
    { field: 'customerQuotationCustomerID', header: 'Customer Name' },
    { field: 'customerQuotationSalesManID', header: 'Sales Man' },
    { field: 'customerQuotationCurrencyID', header: 'Currency' },
    { field: 'customerQuotationRemarks', header: 'Remarks' },
    { field: 'customerQutationSubject', header: 'Subject' },
    { field: 'customerQutationNote', header: 'Note' },
    { field: 'customerQutationWarranty', header: 'Warranty' },
    { field: 'customerQuotationTraining', header: 'Training' },
    { field: 'customerQutationTechnicalDetails', header: 'Tech. Details' },
    { field: 'customerQutationHeader', header: 'Header' },
    { field: 'customerQutationFooter', header: 'Footer' },
    { field: 'customerQutationTerms', header: 'Terms' },
    { field: 'customerQuotationAmount', header: 'Amount' }
];

this.invoiceList = [
  {label: '  --- Select ---',value: null},
  {label: ' CASH',value:0},
  {label: ' CREDIT',value: 1}];

  this.btnFlag = {edit: false, cancel: false, save: true, update: false, delete: false};
  this.initializeControls();
  this.customerQuotationFormGroup = this.fb.group({


    customerQuotationQuotationID:[null],
    customerQuotationDate:[null, [Validators.required]],
    customerQuotationDeliveryTime:[null],
    customerQuotationQuotationValidDate:[null],
    customerQuotationVoucherType:[null],
    customerQuotationLocation: [null, [Validators.required]],
    customerQuotationContactPersonV:[null],
    customerQuotationCustomerID:[null],
    customerQuotationSalesManID:[null],
    customerQuotationCurrencyID:[-1, [DropDownValidator]],
    customerQuotationRemarks:[null],
    customerQuotationSubject:[null],
    customerQuotationNote:[null],
    customerQuotationWarranty:[null],
    customerQuotationTraining:[null],
    customerQuotationTechnicalDetails:[null],
    customerQuotationHeader:[null],
    customerQuotationFooter:[null],
    customerQuotationTerms:[null],
    customerQuotationAmount:[null]
  });
  this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
  this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });

  this.customerQuotationFormGroup.controls.customerQuotationQuotationID.valueChanges.subscribe((control) => {
  if (control != null) {
  this.f.customerQuotationQuotationID.setAsyncValidators([vchrnoAsyncValidator(this.accountapi)]);
  }else {
    this.f.customerQuotationQuotationID.clearValidators();
  }
  });

  }
public  getCurrency(id): string {
  return this.currencyList?.find(k => k.value === id).label;
}

public  getLocation(id): string {
  return this.locationList?.find(k => k.value === id).label;
}
public  getSalesMan(id): string {
  return this.salesManList?.find(k => k.value === id).label;
}

get f() {
    return this.customerQuotationFormGroup.controls;
  }

initializeControls() {
 this.getAllLocation();
 this.getAllSalesMan();
 this.getAllCurrency();
 this.getAllCustomer();

  
  this.customerQuotationentry = {
    rowHeaders: true,
    viewportColumnRenderingOffset: 27,
    viewportRowRenderingOffset: 'auto',
    colWidths: '100px',
    minRows:  2,
    width: 'auto',
    height: 200,
    rowHeights: 23,
    fillHandle: {
      direction: 'vertical',
      autoInsertRow: true
    },
    data: [],
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
      columns: [9],
      indicators: false
    },
    // rowHeaders: true,
     columns: [
        {
          data: 'item',
          type: 'autocomplete',
          source: (query, callback) => {
            callback(this.itemArry);
          },
          allowInvalid: false,
          strict: true
        },
        {
          data: 'partno',
          type: 'text'
        },
        {
          data: 'materialname',
          type: 'text'
        },
        {
          data: 'unit',
          type: 'text'
        },
        {
          data: 'qty',
          type: 'text'
        },
        {
          data: 'price',
          type: 'text'
        },
        {
          data: 'gamount',
          type: 'text'
        },
        {
          data: 'discount',
          type: 'text'
        },
        {
          data: 'netamount',
          type: 'text',
        },
        {
          data: 'id',
          type: 'numeric',
          width: 0
        }
      ],

    colHeaders: [
    this.translate.instant('Item Code'),
    this.translate.instant('Part No.'),
    this.translate.instant('Material Name'),
    this.translate.instant('Unit'),
    this.translate.instant( 'Quantity'),
    this.translate.instant('Price.'),
    this.translate.instant('G.Amount'),
    this.translate.instant('Discount'),
    this.translate.instant( 'Net Amount'),
    this.translate.instant( 'Id')
  ],
    manualRowMove: true,
    manualColumnMove: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
  };


  this.customerQuotationentry.beforeChangeRender = (change, source) => {
 this.ColumnSum();
 console.log(change);
//  if (change[0][1] === 'item') {
//    if (change[0][3] != null) {
//      this.hotRegisterer.getInstance(this.hotid).setDataAtCell(change[0][0], 4, this.f.paymentVoucherNarration.value );
//    }else{
//      this.hotRegisterer.getInstance(this.hotid).setDataAtCell(change[0][0], 4, null );
//    }
//  }
  };
  this.customerQuotationentry.afterRemoveRow = (index: number, amount: number) => {
    // console.log('beforeRemove: index: %d, amount: %d', index, amount);
    // console.log(this.hotRegisterer.getInstance(this.hotid).getDataAtRow(index));
    this.ColumnSum();
  };


  this.customerQuotationentry.afterValidate = (isValid, value, row, prop) => {
        if (!isValid) {
          this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Invalid entry'});
        }

  };

  // this.paymentvoucherentry.afterChange = (r, c) => {
  //   // const  hotinstance = this.hotRegisterer.getInstance(this.hotid);
  //   // var data = hotinstance.getDataAtRow(r);
  //   console.log(r, c);

  // };

 }
ColumnSum() {
   if (this.customerQuotationentry.data.length > 0) {
    const sum1 = this.customerQuotationentry.data.filter(item => item.hasOwnProperty('netamount'))
    .reduce((sum, current) => sum + current.netamount, 0);
    this.customerQuotationFormGroup.controls.customerQuotationAmount.setValue(sum1);
   }
  }


getAllCurrency(){
    this.masterapi.GetAllCurrency().subscribe(k => {
      this.currencyList = k.map((kl) => ({ label: kl.currencyMasterCurrencyName, value: kl.currencyMasterCurrencyId }));
      this.currencyList.unshift({label : '--Select--', value: -1});
      this.currArry = k.map(ar => ar.currencyMasterCurrencyName.trim());
    });
  }

  getAllLocation(){
    this.masterapi.GetAllLocation().subscribe(k => {
      this.locationList = k.map((kl) => ({ label: kl.LocationMasterLocationName, value: kl.LocationMasterLocationId }));
      this.locationList.unshift({label : '--Select--', value: -1});
      this.locationArry = k.map(ar => ar.LocationMasterLocationName.trim());
    });
  }

  getAllSalesMan(){
    this.masterapi.GetAllSalesman().subscribe(k => {
      this.salesManList = k.map((kl) => ({ label: kl.SalesManMasterSalesManName, value: kl.SalesManMasterSalesManId }));
      this.salesManList.unshift({label : '--Select--', value: -1});
      this.salesManArry = k.map(ar => ar.SalesManMasterSalesManName.trim());
    });
  }

  getAllCustomer(){
    this.masterapi.GetAllCustomer().subscribe(k => {
      this.currencyList = k.map((kl) => ({ label: kl.CustomerMasterCustomerName, value: kl.CustomerMasterCustomerNo }));
      this.currencyList.unshift({label : '--Select--', value: -1});
      this.currArry = k.map(ar => ar.CustomerMasterCustomerName.trim());
    });
  }
  

savecustomerQuotation() {
        let deletedGridData: CustomerQuotationDetails[] = [];
       // let deletedAccountTrans: AccountsTransactions[] = [];
        const savedData: Array<GridData> = this.customerQuotationentry.data.filter( k => k.hasOwnProperty('item'));
        const customerQuote: CustomerQuotation = this.customerQuotationFormGroup.value as  CustomerQuotation;
        customerQuote.customerQuotationQuotationId = this.customerQuotationFormGroup.getRawValue().customerQuotationQuotationID;
        customerQuote.customerQuotationQuotationDate = this.customerQuotationFormGroup.getRawValue().customerQuotationDate; 
        customerQuote.customerQuotationDeliveryTimeDate = this.customerQuotationFormGroup.getRawValue().customerQuotationDeliveryTime; 
        customerQuote.customerQuotationQuotationValidDate = this.customerQuotationFormGroup.getRawValue().customerQuotationQuotationValidDate; 
        customerQuote.customerQuotationVoucherType = this.customerQuotationFormGroup.getRawValue().customerQuotationVoucherType; 
        customerQuote.customerQuotationLocationId = this.customerQuotationFormGroup.getRawValue().customerQuotationLocation; 
        customerQuote.customerQuotationCustomerId = this.customerQuotationFormGroup.getRawValue().customerQuotationCustomerID;       
        customerQuote.customerQuotationContactPersonV = this.customerQuotationFormGroup.getRawValue().customerQuotationContactPersonV; 
        customerQuote.customerQuotationSalesManId =this.customerQuotationFormGroup.getRawValue().customerQuotationSalesManID; 
        customerQuote.customerQuotationCurrencyId = this.customerQuotationFormGroup.getRawValue().customerQuotationCurrencyID; 
        customerQuote.customerQuotationRemarks = this.customerQuotationFormGroup.getRawValue().customerQuotationRemarks; 
        customerQuote.customerQuotationSubject = this.customerQuotationFormGroup.getRawValue().customerQuotationSubject; 
        customerQuote.customerQuotationNote = this.customerQuotationFormGroup.getRawValue().customerQuotationNote; 
        customerQuote.customerQuotationWarranty= this.customerQuotationFormGroup.getRawValue().customerQuotationWarranty; 
        customerQuote.customerQuotationTraining= this.customerQuotationFormGroup.getRawValue().customerQuotationTraining; 
        customerQuote.customerQuotationTechnicalDetails= this.customerQuotationFormGroup.getRawValue().customerQuotationTechnicalDetails; 
        customerQuote.customerQuotationHeader= this.customerQuotationFormGroup.getRawValue().customerQuotationHeader; 
        customerQuote.customerQuotationFooter= this.customerQuotationFormGroup.getRawValue().customerQuotationFooter; 
        customerQuote.customerQuotationTerms= this.customerQuotationFormGroup.getRawValue().customerQuotationTerms; 
        customerQuote.CustomerQuotationDetails  = savedData.filter(k => k.item != null
           && k.gamount != null )
        .map( (k: GridData) => {
          return  {
            customerQuotationDetailsId: k.id != null ? k.id : 0,
            customerQuotationDetailsQuotationId: this.customerQuotationFormGroup.getRawValue().paymentVoucherVoucherNo,
            customerQuotationDetailsSlno: 0,
            customerQuotationDetailsItemId: k.item.trim().split('|')[1],
            customerQuotationDetailsDescription: k.item.trim().split('|')[0] ,
            customerQuotationDetailsUnitId:1,
            customerQuotationDetailsQty : k.qty,
            customerQuotationDetailsUnitPrice:  k.price,
            customerQuotationDetailsGrossAmount:k.gamount,
            customerQuotationDetailsDiscount: k.discount,
            customerQuotationDetailsNetAmount :k.netamount,
            customerQuotationDetailsFsno :0,
            customerQuotationDetailsIsEdited:null,
            customerQuotationDetailsPurchasePrice:k.price,
            customerQuotationDetailsPriceType:'Last Purchase Price',
            customerQuotationDetailsVoucherType :this.customerQuotationFormGroup.getRawValue().customerQuotationVoucherType,
            customerQuotationDetailsBatchcode:k.partno,
            customerQuotationDetailsEnquiryDetailsId:0,
            customerQuotationDetailsDelStatus:false
              };
          });



        if (this.btnFlag.update) {
            deletedGridData = this.savedCustomerQuotation.CustomerQuotationDetails.filter((k) =>
             {
               if (!(customerQuote.CustomerQuotationDetails
               .some(l => l.customerQuotationDetailsQuotationDetailsId === k.customerQuotationDetailsQuotationDetailsId))){
                k.customerQuotationDetailsDelStatus = true;
                return k;
               }
             });
            if (deletedGridData.length > 0) {
              customerQuote.CustomerQuotationDetails.push(...deletedGridData);
            }

          }

          if (this.btnFlag.save) {
            this.saveQuotation(customerQuote);
            };

  }

saveQuotation(customerQuote: CustomerQuotation) {
  //   if (this.customerQuotationFormGroup.valid && this.IsValidGrid) {
  //   this.confirmation.confirm({
  //     key: 'confirm-key',
  //     message: 'Do you want to save voucher?',
  //     accept: () => {
  //       this.accountapi.InsertPaymentVoucher(customerQuote).subscribe((data) => {
  //         this.btnFlag = {edit: true, cancel: false, save: false, update: true, delete: true};
  //         this.savedcustomerQuotation =  data.result;
  //         this.updateFormGrid(data.result);
  //         if (data.valid) {
  //           this.messageService.add({severity: 'success', summary: 'Alert',
  //           detail: data.message});
  //         }else if (data.error){
  //           this.messageService.add({severity: 'error', summary: 'Alert',
  //            detail: (data.message != null && data.message.trim() !== '' ? data.message : data.exception) });
  //         }
  //       }, (err) => {
  //         this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Customer Quotation Save Failed'});
  //     });
  //      }
  //   });
  // } else{
  //   this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Please fill mandatory fields'});
  //   this.customerQuotationFormGroup.markAllAsTouched();
  //   this.customerQuotationFormGroup.markAsDirty();
  // }
  }
updateQuotation(customerQuote: CustomerQuotation) {
  //   if (this.customerQuotationFormGroup.valid && this.IsValidGrid) {
  //   this.confirmation.confirm({
  //     key: 'confirm-key',
  //     message: 'Do you want to update existing voucher?',
  //     accept: () => {
  //       this.accountapi.UpdatePaymentVoucher(customerQuote).subscribe((data) => {
  //         this.btnFlag = {edit: true, cancel: false, save: false, update: true, delete: true};
  //         this.updateFormGrid(data.result);
  //         this.messageService.add({severity: 'success', summary: 'Alert', detail: 'Customer Quotation Updated Succesfully'});
  //         }, (err) => {
  //         this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Customer Quotation Update Failed'});
  //     });
  //      }
  //   });
  // } else {
  //   // const msg1 = 'Please fill mandatory fields';
  //   // const msg2 = 'Please fill Empyt Debit account details';
  //   this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Please fill mandatory fields' });
  //   this.customerQuotationFormGroup.markAllAsTouched();
  //   this.customerQuotationFormGroup.markAsDirty();
  // }
  }


// getAllCustomerQuotations() {
//     this.accountapi.GetPaymentVouchers().subscribe((data) => {
//       this.customerQuotationarry = data.result;
//     });
//   }

//  public getAccountName(acctnumber: string): string{
//    return this.accountArray
//    .find(j => j.masterAccountsTableAccNo.trim() === acctnumber.trim()).masterAccountsTableAccName;
//  }

new() {
   this.customerQuotationFormGroup.reset();
   this.customerQuotationentry.data = [];
   this.customerQuotationentry.readOnly = false;
   this.hotRegisterer.getInstance(this.hotid).updateSettings(this.customerQuotationentry);
  //  this.hotRegisterer.getInstance(this.hotid).selectAll();
  //  this.hotRegisterer.getInstance(this.hotid).destroyEditor(false, true);
  //  this.hotRegisterer.getInstance(this.hotid).clear();
  //  this.hotRegisterer.getInstance(this.hotid).selectCell(0, 0);

   this.customerQuotationFormGroup.get('customerQuotationQuotationID').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationLocation').setValue(-1);
   this.customerQuotationFormGroup.get('customerQuotationSalesManID').setValue(-1);
   this.customerQuotationFormGroup.get('customerQuotationCurrencyID').setValue(-1);
   this.customerQuotationFormGroup.get('customerQuotationDate').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationDeliveryTime').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationQuotationValidDate').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationVoucherType').setValue(-1);
   this.customerQuotationFormGroup.get('customerQuotationCustomerID').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationContactPersonV').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationRemarks').setValue(null);
   this.customerQuotationFormGroup.get('customerQutationSubject').setValue(null);
   this.customerQuotationFormGroup.get('customerQutationNote').setValue(null);
   this.customerQuotationFormGroup.get('customerQutationWarranty').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationTraining').setValue(null);
   this.customerQuotationFormGroup.get('customerQutationTechnicalDetails').setValue(null);
   this.customerQuotationFormGroup.get('customerQutationHeader').setValue(null);
   this.customerQuotationFormGroup.get('customerQutationFooter').setValue(null);
   this.customerQuotationFormGroup.get('customerQutationTerms').setValue(null);
   this.customerQuotationFormGroup.get('customerQuotationAmount').setValue(null); 
   this.btnFlag = {edit: false, cancel: false, save: true, update: false, delete: false};
   this.search = null;
   this.index = 0;
   this.customerQuotationFormGroup.enable();
   this.f.paymentVoucherVoucherNo.clearValidators();
   this.customerQuotationFormGroup.updateValueAndValidity();
 }


showMaximizableDialog() {
 // this.getAllCustomerQuotations();
  this.displayMaximizable = true;
}

updateFormGrid(CustQuote: CustomerQuotation) {
  this.search = null;
  this.customerQuotationFormGroup.patchValue(
    {
customerQuotationQuotationId:CustQuote.customerQuotationQuotationId ,
customerQuotationQuotationDate:CustQuote.customerQuotationQuotationDate,
customerQuotationDeliveryTimeDate:CustQuote.customerQuotationDeliveryTimeDate ,
customerQuotationQuotationValidDate: CustQuote.customerQuotationQuotationValidDate ,
customerQuotationVoucherType: CustQuote.customerQuotationVoucherType,
customerQuotationLocationId: CustQuote.customerQuotationLocationId, 
customerQuotationCustomerId: CustQuote.customerQuotationCustomerId ,      
customerQuotationContactPersonV: CustQuote.customerQuotationContactPersonV,
customerQuotationSalesManId:CustQuote.customerQuotationSalesManId,
customerQuotationCurrencyId: CustQuote.customerQuotationCurrencyId, 
customerQuotationRemarks: CustQuote.customerQuotationRemarks, 
customerQuotationSubject: CustQuote.customerQuotationSubject,
customerQuotationNote: CustQuote.customerQuotationNote, 
customerQuotationWarranty: CustQuote.customerQuotationWarranty, 
customerQuotationTraining: CustQuote.customerQuotationTraining,
customerQuotationTechnicalDetails: CustQuote.customerQuotationTechnicalDetails,
customerQuotationHeader: CustQuote.customerQuotationHeader, 
customerQuotationFooter: CustQuote.customerQuotationFooter,
customerQuotationTerms: CustQuote.customerQuotationTerms
    }
  );

  // this.accountTransactionList = pymt.accountsTransactions;
    // this.jobArray.find(j => j.jobMasterJobName.trim()  === k.jobname.trim()).jobMasterId,
  const gridData: GridData[] = CustQuote.CustomerQuotationDetails.map(k => {
    const accountId: string = k.customerQuotationDetailsItemId  != null ? this.itemArry.find(l => l.match(k.customerQuotationDetailsItemId)) : null;
    
    return {
          item: String(k.customerQuotationDetailsItemId),
          partno: k.CustomerQuotationDetailsBatchcode,
          materialname: k.customerQuotationDetailsDescription,
          unit: k.customerQuotationDetailsUnitId,
          qty: k.customerQuotationDetailsQty,
          price: k.customerQuotationDetailsUnitPrice,
          gamount:k.customerQuotationDetailsGrossAmount ,
          discount: k.customerQuotationDetailsDiscount ,
          netamount :k.customerQuotationDetailsNetAmount,
          id: k.customerQuotationDetailsId
    };
  });
  this.customerQuotationentry.data = gridData;
  this.hotRegisterer.getInstance(this.hotid).updateSettings({data: gridData, readOnly: true});
  this.customerQuotationFormGroup.disable();
  this.f.customerQuotationQuotationID.clearValidators();
  this.customerQuotationFormGroup.updateValueAndValidity();

}

handleChange(e) {
  this.index = e.index;
}

GetSavedCustomerQuotationDetails(id: string) {
  this.index = 0;
  this.accountapi.GetSavedPaymentDetails(id).subscribe((data) => {
    if (data !== null) {
      this.btnFlag = {edit: true, cancel: true, save: false, update: true, delete: true};
     // this.updateFormGrid(data.result);
     // this.savedCustomerQuotation = data.result;
      this.customerQuotationFormGroup.disable();
    }else {
      this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Customer Quotation not found'});
    }
    }, (err) => {
    this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Failed'});
    this.customerQuotationFormGroup.updateValueAndValidity();
});
}

delete() {
  this.confirmation.confirm({
    key: 'confirm-key',
    message: 'Do you want to delete voucher?',
    accept: () => {
    //   this.accountapi.DeletePaymentVoucher(this.savedCustomerQuotation).subscribe((data) => {
    //     this.messageService.add({severity: 'success', summary: 'Alert', detail: 'Customer Quotation Deleted Succesfully'});
    //     this.new();
    //   }, (err) => {
    //     this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Failed'});
    // });
     }
  });

}
cancel() {
this.GetSavedCustomerQuotationDetails(this.customerQuotationFormGroup.getRawValue().customerQuotationQuotationID);
 }

edit() {
  this.hotRegisterer.getInstance(this.hotid).updateSettings({readOnly: false});
  this.f.customerQuotationQuotationID.clearValidators();
  this.customerQuotationFormGroup.enable();
  this.customerQuotationFormGroup.controls.customerQuotationQuotationID.disable();
  this.customerQuotationFormGroup.updateValueAndValidity();

 }

 public get IsValidGrid(): boolean {
   if (this.customerQuotationentry.data.length > 0 ) {
    // this.paymentvoucherentry.data.forEach((value: GridData, index, arry) => {
      console.log(Object.values(this.customerQuotationentry.data));
      return Object.values(this.customerQuotationentry.data).some((k: GridData) => k.item != null && k.gamount != null);
    // });
   }
   return false;
 }
}
export const vchrnoAsyncValidator =
  (acctService: AccountApiService, time: number = 800) => {
    return (input: FormControl) => {
      if (input.value != null && input.value.trim() !== '') {
        return timer(time).pipe(
          switchMap(() => acctService.CheckVnoExist(input.value)),
          map(res => {
            return res.result === false ? null : {Exist: true};
          })
        );
      }
    };
  };
interface GridData {
  item?: string;
  partno?: string;
  materialname?: string;
  unit?: number;
  qty?: number;
  price?: number;
  gamount?: number;
  discount?: number;
  netamount?: number;
  id?: number;
}

interface ButtonFlag {edit?: boolean ; cancel?: boolean ; update?: boolean;
  save?: boolean ; delete?: boolean; }
