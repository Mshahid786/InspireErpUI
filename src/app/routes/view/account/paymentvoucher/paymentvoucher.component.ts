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
import { PaymentVoucher } from 'src/app/routes/domain/PaymentVoucher';

import { PaymentVoucherDetails } from 'src/app/routes/domain/PaymentVoucherDetails';

import { ChartofAccounts } from 'src/app/routes/domain';
import { JobMaster } from 'src/app/routes/domain/JobMaster';
import { CostCenterMaster } from 'src/app/routes/domain/CostCenterMaster';
import { AccountsTransactions } from 'src/app/routes/domain/AccountsTransactions';
import { HotTableRegisterer } from '@handsontable/angular';
import { DropDownValidator } from 'src/app/shared/validator/customvalidtor';
import { timer, Observable } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-paymentvoucher',
  templateUrl: './paymentvoucher.component.html',
  styleUrls: ['./paymentvoucher.component.scss']
})
export class PaymentvoucherComponent implements OnInit {
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

  accountArray: ChartofAccounts[] = [];
  acctArry: string[] = [];
  accountList: SelectItem[];

  jobArray: JobMaster[] = [];
  jobList: SelectItem[] = [];
  jobArry: string[] = [];

  costcenterArray: CostCenterMaster[] = [];
  costcenterList: SelectItem[] = [];
  costcenterArry: string[] = [];

  accountTransactionList: AccountsTransactions[] = [];
  paymentVoucherarry: PaymentVoucher[] = [];
  // savedPaymentVoucherGridData: GridData[] = [];
  savedPaymentVoucher: PaymentVoucher;
  private hotRegisterer = new HotTableRegisterer();
  hotid = 'paymtVouchrEntry';
  constructor(private activatedroute: ActivatedRoute,
              private messageService: MessageService,
              private fb: FormBuilder,
              private confirmation: ConfirmationService,
              private translate: TranslateService,
              private router: Router,
              private masterapi: MasterApiService,
              private accountapi: AccountApiService) {
                this.licensekey = defaults.hotlicensekey;
               }

  paymentvoucherentry: Handsontable.GridSettings ;
  paymentVoucherFormGroup: FormGroup;
  // accountTransactionDataset = [];
cols;
ngOnInit(): void {
  this.cols = [
    { field: 'paymentVoucherVoucherNo', header: 'Voucher No'},
    { field: 'paymentVoucherDate', header: 'Date' },
    { field: 'paymentVoucherCrAcNo', header: 'Account' },
    { field: 'paymentVoucherCurrencyId', header: 'Currency' },
    { field: 'paymentVoucherDbAmount', header: 'Vchr.Debit' },
    { field: 'paymentVoucherCrAmount', header: 'Vchr.Credit' },
    { field: 'paymentVoucherNarration', header: 'Particulars' },
    { field: 'paymentVoucherDbAmount', header: 'Dtls.Debit' },
    { field: 'paymentVoucherCrAmount', header: 'Dtls.Credit' }
];

  this.btnFlag = {edit: false, cancel: false, save: true, update: false, delete: false};
  this.initializeControls();
  this.paymentVoucherFormGroup = this.fb.group({
        paymentVoucherSno: [null],
        paymentVoucherVoucherNo: [{ value: null, disabled: true }],
        paymentVoucherDate: [null, [Validators.required]],
        paymentVoucherVoucherRef: ['', [Validators.required]],
        paymentVoucherCrAcNo: [-1 , [DropDownValidator]],
        paymentVoucherCrAmount: [null],
        paymentVoucherDbAmount: [null],
        paymentVoucherNarration: ['', [Validators.required]],
        paymentVoucherCurrencyId: [-1, [DropDownValidator]]
  });
  this.breadcumbmodel = this.router.url.slice(1).split('/').map((k) => ({label: k }));
  this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  this.paymentVoucherFormGroup.controls.paymentVoucherVoucherNo.valueChanges.subscribe((control) => {
  if (control != null) {
  this.f.paymentVoucherVoucherNo.setAsyncValidators([vchrnoAsyncValidator(this.accountapi)]);
  }else {
    this.f.paymentVoucherVoucherNo.clearValidators();
  }
  });
  }
public  getCurrency(id): string {
  return this.currencyList?.find(k => k.value === id).label;
}
//   FilterUtils['custom'] = (value, filter): boolean => {
//     if (filter === undefined || filter === null || filter.trim() === '') {
//         return true;
//     }
//     if (value === undefined || value === null) {
//         return false;
//     }
//     return parseInt(filter) > value;
// };

get f() {
    return this.paymentVoucherFormGroup.controls;
  }

initializeControls() {
  this.getAllJobs();
  this.getAllCostCenter();
  this.getAllAccount();
  this.getAllCurrency();
  this.getAllPaymentVouchrs();
  // this.getAllAccountTransaction();
  this.paymentvoucherentry = {
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
      columns: [5],
      indicators: false
    },
    // rowHeaders: true,
     columns: [
        {
          data: 'account',
          type: 'autocomplete',
          source: (query, callback) => {
            callback(this.acctArry);
          },
          allowInvalid: false,
          strict: true
        },
        {
          data: 'debit',
          type: 'numeric'
        },
        {
          data: 'jobname',
          type: 'autocomplete',
          source: (query, callback) => {
            callback(this.jobArry);
          },
          allowInvalid: false,
          strict: false
        },
        {
          data: 'costcenter',
          type: 'dropdown',
          source: (query, callback) => {
            callback(this.costcenterArry);
          },
        },
        {
          data: 'narration',
          type: 'text',
        },
        {
          data: 'id',
          type: 'numeric',
          width: 0
        }
      ],
    colHeaders: [
    this.translate.instant('Account'),
    this.translate.instant('Debit'),
    this.translate.instant('Job Name'),
    this.translate.instant('Cost Center'),
    this.translate.instant( 'Narration'),
    this.translate.instant( 'Id')
  ],
    manualRowMove: true,
    manualColumnMove: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
  };


  this.paymentvoucherentry.beforeChangeRender = (change, source) => {
 this.ColumnSum();
 console.log(change);
 if (change[0][1] === 'account') {
   if (change[0][3] != null) {
     this.hotRegisterer.getInstance(this.hotid).setDataAtCell(change[0][0], 4, this.f.paymentVoucherNarration.value );
   }else{
     this.hotRegisterer.getInstance(this.hotid).setDataAtCell(change[0][0], 4, null );
   }
 }
  };
  this.paymentvoucherentry.afterRemoveRow = (index: number, amount: number) => {
    // console.log('beforeRemove: index: %d, amount: %d', index, amount);
    // console.log(this.hotRegisterer.getInstance(this.hotid).getDataAtRow(index));
    this.ColumnSum();
  };


  this.paymentvoucherentry.afterValidate = (isValid, value, row, prop) => {
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
   if (this.paymentvoucherentry.data.length > 0) {
    const sum1 = this.paymentvoucherentry.data.filter(item => item.hasOwnProperty('debit'))
    .reduce((sum, current) => sum + current.debit, 0);
    this.paymentVoucherFormGroup.controls.paymentVoucherDbAmount.setValue(sum1);
   }
  }
getAllCurrency(){
    this.masterapi.GetAllCurrency().subscribe(k => {
      this.currencyList = k.map((kl) => ({ label: kl.currencyMasterCurrencyName, value: kl.currencyMasterCurrencyId }));
      this.currencyList.unshift({label : '--Select--', value: -1});
      this.currArry = k.map(ar => ar.currencyMasterCurrencyName.trim());
    });
  }
getAllJobs() {
    this.masterapi.GetAllJob().subscribe(k => {
      this.jobArray = k;
      this.jobList = k.map((kl) => ({ label: kl.jobMasterJobName, value: kl.jobMasterId }));
      this.jobArry = k.map(ar => ar.jobMasterJobName.trim());
    });
  }

getAllCostCenter() {
    this.masterapi.GetAllCostCenter().subscribe(k => {
      this.costcenterArray = k;
      this.costcenterList = k.map((kl) => ({ label: kl.costCenterMasterCostCenterName, value: kl.costCenterMasterCostCenterId }));
      this.costcenterArry = k.map(ar => ar.costCenterMasterCostCenterName.trim());
    });
  }

getAllAccount() {
    this.accountapi.GetAllAcounts().subscribe(k => {
      this.accountArray = k.result;
      this.accountList = k.result.filter(v => v.masterAccountsTableRelativeNo.trim() === 'AS11')
      .map((kl) => ({ label: kl.masterAccountsTableAccName, value: kl.masterAccountsTableAccNo }));
      this.accountList.unshift({label : '--Select--', value: -1});
      this.acctArry = k.result.map(ar => ar.masterAccountsTableAccName.trim() + '|' + ar.masterAccountsTableAccNo);
    });
  }


savePaymentVoucher() {
        let deletedGridData: PaymentVoucherDetails[] = [];
        let deletedAccountTrans: AccountsTransactions[] = [];
        const savedData: Array<GridData> = this.paymentvoucherentry.data.filter( k => k.hasOwnProperty('account'));
        const paymtVoucher: PaymentVoucher = this.paymentVoucherFormGroup.value as  PaymentVoucher;
        paymtVoucher.paymentVoucherVoucherNo = this.paymentVoucherFormGroup.getRawValue().paymentVoucherVoucherNo;
        paymtVoucher.paymentVoucherSno = this.paymentVoucherFormGroup.value.paymentVoucherSno;
        paymtVoucher.paymentVoucherCrAmount = 0;
        paymtVoucher.paymentVoucherFcCrAmount = 0;
        paymtVoucher.paymentVoucherFsno = 0;
        paymtVoucher.paymentVoucherUserId = 0;
        paymtVoucher.paymentVoucherLocationId = 0;
        paymtVoucher.paymentVoucherAllocationId = 0;
        paymtVoucher.accountsTransactions = [];
        paymtVoucher.paymentVoucherDetails = savedData.filter(k => k.account != null
           && k.debit != null && k.narration != null)
        .map( (k: GridData) => {
          return  {
                      paymentVoucherDetailsId: k.id != null ? k.id : 0,
                      paymentVoucherDetailsVoucherNo: this.paymentVoucherFormGroup.getRawValue().paymentVoucherVoucherNo,
                      paymentVoucherDetailsSno: 0,
                      paymentVoucherDetailsAcNo: k.account.trim().split('|')[1] ,
                      paymentVoucherDetailsDbAmount: k.debit,
                      paymentVoucherDetailsDbFcAmount: k.debit,
                      paymentVoucherDetailsCrAmount: 0,
                      paymentVoucherDetailsCrFcAmount: 0,
                      paymentVoucherDetailsJobId: k.jobname != null && k.jobname !== '' ? this.jobArray
                      .find(j => j.jobMasterJobName.trim()  === k.jobname.trim()).jobMasterId : null,
                      paymentVoucherDetailsDepartmentId: 0,
                      paymentVoucherDetailsNarration: k.narration,
                      paymentVoucherDetailsFsno: 0,
                      paymentVoucherDetailsLocationId: 0,
                      paymentVocherDetailsDelStatus: false
              };
          });
        if (this.btnFlag.update) {
            deletedGridData = this.savedPaymentVoucher.paymentVoucherDetails.filter((k) =>
             {
               if (!(paymtVoucher.paymentVoucherDetails
               .some(l => l.paymentVoucherDetailsId === k.paymentVoucherDetailsId))){
                k.paymentVocherDetailsDelStatus = true;
                return k;
               }
             });
            if (deletedGridData.length > 0) {
              paymtVoucher.paymentVoucherDetails.push(...deletedGridData);
            }

          }

        const creditData: AccountsTransactions = {
               accountsTransactionsAccNo : this.f.paymentVoucherCrAcNo.value,
               accountsTransactionsTransDate : this.f.paymentVoucherDate.value,
               accountsTransactionsParticulars : this.f.paymentVoucherNarration.value,
               accountsTransactionsCredit : this.f.paymentVoucherDbAmount.value,
               accountsTransactionsFcCredit : this.f.paymentVoucherDbAmount.value,
               accountsTransactionsVoucherType : null,
               accountsTransactionsTstamp : new Date(),
               accountsTransactionsVoucherNo : this.paymentVoucherFormGroup.getRawValue().paymentVoucherVoucherNo,
               accountsTransactionsDescription : this.f.paymentVoucherNarration.value,
               accountsTransactionsStatus : null,
               accountstransactionsDelStatus: false
          };
        paymtVoucher.accountsTransactions.push(creditData);
        paymtVoucher.paymentVoucherDetails.filter(x => x.paymentVocherDetailsDelStatus === false)
        .forEach(element => {
          const debitData: AccountsTransactions = {
            accountsTransactionsAccNo: element.paymentVoucherDetailsAcNo,
            accountsTransactionsTransDate: this.f.paymentVoucherDate.value,
            accountsTransactionsParticulars: element.paymentVoucherDetailsNarration,
            accountsTransactionsDebit: element.paymentVoucherDetailsDbAmount,
            accountsTransactionsFcDebit: element.paymentVoucherDetailsDbAmount,
            accountsTransactionsVoucherType: null,
            accountsTransactionsTstamp: new Date(),
            accountsTransactionsVoucherNo: element.paymentVoucherDetailsVoucherNo,
            accountsTransactionsDescription: element.paymentVoucherDetailsNarration,
            accountsTransactionsStatus: null,
            accountstransactionsDelStatus: false
          };
          paymtVoucher.accountsTransactions.push(debitData);
        });

        if (this.btnFlag.save) {
          this.saveVoucher(paymtVoucher);
        } else {
          paymtVoucher.accountsTransactions.filter(x => x.accountsTransactionsDebit > 0)
          .forEach((element, index, arry) => {
            const acctTransEntry: AccountsTransactions = this.savedPaymentVoucher.accountsTransactions
            .filter(x => x.accountsTransactionsDebit > 0)
            .find(kl => kl.accountsTransactionsVoucherNo === arry[index].accountsTransactionsVoucherNo
              && kl.accountsTransactionsAccNo === arry[index].accountsTransactionsAccNo
              );
            if (acctTransEntry) {
              arry[index].accountsTransactionsTransSno = acctTransEntry.accountsTransactionsTransSno;
              arry[index].accountsTransactionsStatus  = acctTransEntry.accountsTransactionsStatus;
              arry[index].accountsTransactionsVoucherType = acctTransEntry.accountsTransactionsVoucherType;
            }

          });


          paymtVoucher.accountsTransactions.filter(x => x.accountsTransactionsCredit > 0)
          .forEach((element, index, arry) => {
            const acctTransEntry: AccountsTransactions = this.savedPaymentVoucher.accountsTransactions
            .filter(x => x.accountsTransactionsCredit > 0)
            .find(kl => kl.accountsTransactionsVoucherNo === arry[index].accountsTransactionsVoucherNo
              && kl.accountsTransactionsAccNo === arry[index].accountsTransactionsAccNo
              );
            if (acctTransEntry) {
              arry[index].accountsTransactionsTransSno = acctTransEntry.accountsTransactionsTransSno;
              arry[index].accountsTransactionsStatus  = acctTransEntry.accountsTransactionsStatus;
              arry[index].accountsTransactionsVoucherType = acctTransEntry.accountsTransactionsVoucherType;
            }

          });

          deletedAccountTrans = this.savedPaymentVoucher.accountsTransactions
          .filter((k) =>
            {
              if (!(paymtVoucher.accountsTransactions.filter(x => x.accountsTransactionsTransSno > 0)
              .some(l => l.accountsTransactionsTransSno
                === k.accountsTransactionsTransSno
                ))){
               k.accountstransactionsDelStatus = true;
               return k;
              }
            });
          if (deletedAccountTrans.length > 0) {
                 paymtVoucher.accountsTransactions.push(...deletedAccountTrans);
              }
          this.updateVoucher(paymtVoucher);
        }
  }
saveVoucher(paymtVoucher: PaymentVoucher) {
    if (this.paymentVoucherFormGroup.valid && this.IsValidGrid) {
    this.confirmation.confirm({
      key: 'confirm-key',
      message: 'Do you want to save voucher?',
      accept: () => {
        this.accountapi.InsertPaymentVoucher(paymtVoucher).subscribe((data) => {
          this.btnFlag = {edit: true, cancel: false, save: false, update: true, delete: true};
          this.savedPaymentVoucher =  data.result;
          this.updateFormGrid(data.result);
          if (data.valid) {
            this.messageService.add({severity: 'success', summary: 'Alert',
            detail: data.message});
          }else if (data.error){
            this.messageService.add({severity: 'error', summary: 'Alert',
             detail: (data.message != null && data.message.trim() !== '' ? data.message : data.exception) });
          }
        }, (err) => {
          this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Payment Voucher Save Failed'});
      });
       }
    });
  } else{
    this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Please fill mandatory fields'});
    this.paymentVoucherFormGroup.markAllAsTouched();
    this.paymentVoucherFormGroup.markAsDirty();
  }
  }
updateVoucher(paymtVoucher: PaymentVoucher) {
    if (this.paymentVoucherFormGroup.valid && this.IsValidGrid) {
    this.confirmation.confirm({
      key: 'confirm-key',
      message: 'Do you want to update existing voucher?',
      accept: () => {
        this.accountapi.UpdatePaymentVoucher(paymtVoucher).subscribe((data) => {
          this.btnFlag = {edit: true, cancel: false, save: false, update: true, delete: true};
          this.updateFormGrid(data.result);
          this.messageService.add({severity: 'success', summary: 'Alert', detail: 'Payment Voucher Updated Succesfully'});
          }, (err) => {
          this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Payment Voucher Update Failed'});
      });
       }
    });
  } else {
    // const msg1 = 'Please fill mandatory fields';
    // const msg2 = 'Please fill Empyt Debit account details';
    this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Please fill mandatory fields' });
    this.paymentVoucherFormGroup.markAllAsTouched();
    this.paymentVoucherFormGroup.markAsDirty();
  }
  }
getAllAccountTransaction() {
    this.accountapi.GetAllAcountTransactions().subscribe((data) => {
      this.accountTransactionList = data.result;
    });
  }

getAllPaymentVouchrs() {
    this.accountapi.GetPaymentVouchers().subscribe((data) => {
      this.paymentVoucherarry = data.result;
    });
  }

 public getAccountName(acctnumber: string): string{
   return this.accountArray
   .find(j => j.masterAccountsTableAccNo.trim() === acctnumber.trim()).masterAccountsTableAccName;
 }

new() {
   this.paymentVoucherFormGroup.reset();
   this.paymentvoucherentry.data = [];
   this.paymentvoucherentry.readOnly = false;
   this.hotRegisterer.getInstance(this.hotid).updateSettings(this.paymentvoucherentry);
  //  this.hotRegisterer.getInstance(this.hotid).selectAll();
  //  this.hotRegisterer.getInstance(this.hotid).destroyEditor(false, true);
  //  this.hotRegisterer.getInstance(this.hotid).clear();
  //  this.hotRegisterer.getInstance(this.hotid).selectCell(0, 0);
   this.accountTransactionList = [];
   this.paymentVoucherFormGroup.get('paymentVoucherSno').setValue(null);
   this.paymentVoucherFormGroup.get('paymentVoucherCrAcNo').setValue(-1);
   this.paymentVoucherFormGroup.get('paymentVoucherCurrencyId').setValue(-1);
   this.btnFlag = {edit: false, cancel: false, save: true, update: false, delete: false};
   this.search = null;
   this.index = 0;
   this.paymentVoucherFormGroup.enable();
   this.f.paymentVoucherVoucherNo.clearValidators();
   this.paymentVoucherFormGroup.updateValueAndValidity();
 }

showMaximizableDialog() {
  this.getAllPaymentVouchrs();
  this.displayMaximizable = true;
}

updateFormGrid(pymt: PaymentVoucher) {

  this.search = null;
  this.paymentVoucherFormGroup.patchValue(
    {
      paymentVoucherSno: pymt.paymentVoucherSno,
      paymentVoucherVoucherNo: pymt.paymentVoucherVoucherNo,
      paymentVoucherDate: new Date(pymt.paymentVoucherDate),
      paymentVoucherVoucherRef: pymt.paymentVoucherVoucherRef,
      paymentVoucherCrAcNo: pymt.paymentVoucherCrAcNo,
      paymentVoucherCrAmount: pymt.paymentVoucherDbAmount,
      paymentVoucherDbAmount: pymt.paymentVoucherDbAmount,
      paymentVoucherNarration: pymt.paymentVoucherNarration,
      paymentVoucherCurrencyId: pymt.paymentVoucherCurrencyId
    }
  );

  this.accountTransactionList = pymt.accountsTransactions;
    // this.jobArray.find(j => j.jobMasterJobName.trim()  === k.jobname.trim()).jobMasterId,
  const gridData: GridData[] = pymt.paymentVoucherDetails.map(k => {
    const accountId: string = k.paymentVoucherDetailsAcNo != null ? this.acctArry.find(l => l.match(k.paymentVoucherDetailsAcNo)) : null;
    const  jobId: string = (k.paymentVoucherDetailsJobId != null ) ? this.jobArry.find(l =>
                         l.match(k.paymentVoucherDetailsJobId.toString())) : null;
    return {
                  account: accountId,
                  debit: k.paymentVoucherDetailsDbAmount,
                  jobname: jobId,
                  costcenter: null,
                  narration: k.paymentVoucherDetailsNarration,
                  id: k.paymentVoucherDetailsId
    };
  });
  this.paymentvoucherentry.data = gridData;
  this.hotRegisterer.getInstance(this.hotid).updateSettings({data: gridData, readOnly: true});
  this.paymentVoucherFormGroup.disable();
  this.f.paymentVoucherVoucherNo.clearValidators();
  this.paymentVoucherFormGroup.updateValueAndValidity();

}

handleChange(e) {
  this.index = e.index;
}

GetSavedPaymentDetails(id: string) {
  this.index = 0;
  this.accountapi.GetSavedPaymentDetails(id).subscribe((data) => {
    if (data !== null) {
      this.btnFlag = {edit: true, cancel: true, save: false, update: true, delete: true};
      this.accountTransactionList = data.result.accountsTransactions;
      this.updateFormGrid(data.result);
      this.savedPaymentVoucher = data.result;
      this.paymentVoucherFormGroup.disable();
    }else {
      this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Payment voucher not found'});
    }
    }, (err) => {
    this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Failed'});
    this.paymentVoucherFormGroup.updateValueAndValidity();
});
}

delete() {
  this.confirmation.confirm({
    key: 'confirm-key',
    message: 'Do you want to delete voucher?',
    accept: () => {
      this.accountapi.DeletePaymentVoucher(this.savedPaymentVoucher).subscribe((data) => {
        this.messageService.add({severity: 'success', summary: 'Alert', detail: 'Payment Voucher Deleted Succesfully'});
        this.new();
      }, (err) => {
        this.messageService.add({severity: 'error', summary: 'Alert', detail: 'Failed'});
    });
     }
  });

}
cancel() {
this.GetSavedPaymentDetails(this.paymentVoucherFormGroup.getRawValue().paymentVoucherVoucherNo);
 }

edit() {
  this.hotRegisterer.getInstance(this.hotid).updateSettings({readOnly: false});
  this.f.paymentVoucherVoucherNo.clearValidators();
  this.paymentVoucherFormGroup.enable();
  this.paymentVoucherFormGroup.controls.paymentVoucherVoucherNo.disable();
  this.paymentVoucherFormGroup.updateValueAndValidity();

 }

 public get IsValidGrid(): boolean {
   if (this.paymentvoucherentry.data.length > 0 ) {
    // this.paymentvoucherentry.data.forEach((value: GridData, index, arry) => {
      console.log(Object.values(this.paymentvoucherentry.data));
      return Object.values(this.paymentvoucherentry.data).some((k: GridData) => k.account != null && k.debit != null);
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
  account?: string;
  debit?: number;
  jobname?: string;
  costcenter?: string;
  narration?: string;
  id?: number;
}

interface ButtonFlag {edit?: boolean ; cancel?: boolean ; update?: boolean;
  save?: boolean ; delete?: boolean; }
