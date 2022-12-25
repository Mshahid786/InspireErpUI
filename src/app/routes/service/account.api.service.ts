import { PaymentVoucher } from 'src/app/routes/domain/PaymentVoucher';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ChartofAccounts, ReceiptVoucher } from '../domain';
import { AccountsUrls } from './url.api';
import { PaymentVoucherCompositeView } from '../domain/PaymentVoucherCompositeView';
import { AccountsTransactions } from '../domain/AccountsTransactions';
import { ReceiptVoucherCompositeView } from '../domain/ReceiptVoucherCompositeView';
import { ApiResponse } from '../domain/ApiResponse';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})

export class AccountApiService {

  baseUrl: string = environment.apiRootURL;
  constructor(private httpClient: HttpClient) { }

  public GetAllAcounts() {
    return this.httpClient.get<ApiResponse<ChartofAccounts[]>>(this.baseUrl + AccountsUrls.GetAllAccounts);
  }

  public InsertReceiptVoucher(data1: ReceiptVoucher) {
    return this.httpClient.post<ApiResponse<ReceiptVoucher>>(this.baseUrl + AccountsUrls.InsertReceiptVoucher, data1, httpOptions);
  }

  public DeleteReceiptVoucher(data1: ReceiptVoucher) {
    return this.httpClient.post<ApiResponse<number>>(this.baseUrl + AccountsUrls.DeleteReceiptVoucher, data1, httpOptions);
  }
  public UpdateReceiptVoucher(data1: ReceiptVoucher) {
    return this.httpClient.post<ApiResponse<ReceiptVoucher>>(this.baseUrl + AccountsUrls.UpdateReceiptVoucher, data1, httpOptions);
  }

   public GetReceiptVouchers() {
    return this.httpClient.get<ApiResponse<ReceiptVoucher[]>>(this.baseUrl + AccountsUrls.GetReceiptVouchers);
  }

  public GetSavedReceiptDetails(id: string) {
    return this.httpClient.get<ApiResponse<ReceiptVoucher>>(this.baseUrl + AccountsUrls.GetSavedReceiptDetails + '/' + id);
  }



  public InsertPaymentVoucher(data1: PaymentVoucher) {
    return this.httpClient.post<ApiResponse<PaymentVoucher>>(this.baseUrl + AccountsUrls.InsertPaymentVoucher, data1, httpOptions);
  }

  public DeletePaymentVoucher(data1: PaymentVoucher) {
    return this.httpClient.post<ApiResponse<number>>(this.baseUrl + AccountsUrls.DeletePaymentVoucher, data1, httpOptions);
  }
  public UpdatePaymentVoucher(data1: PaymentVoucher) {
    return this.httpClient.post<ApiResponse<PaymentVoucher>>(this.baseUrl + AccountsUrls.UpdatePaymentVoucher, data1, httpOptions);
  }

  public GetAllAcountTransactions() {
    return this.httpClient.get<ApiResponse<AccountsTransactions[]>>(this.baseUrl + AccountsUrls.GetAllAccountTransaction);
  }

  public GetPaymentVouchers() {
    return this.httpClient.get<ApiResponse<PaymentVoucher[]>>(this.baseUrl + AccountsUrls.GetPaymentVouchers);
  }

  public GetSavedPaymentDetails(id: string) {
    return this.httpClient.get<ApiResponse<PaymentVoucher>>(this.baseUrl + AccountsUrls.GetSavedPaymentDetails + '/' + id);
  }

  public CheckVnoExist(vno: string) {
    return this.httpClient.get<ApiResponse<boolean>>(this.baseUrl + AccountsUrls.CheckVnoExist + '/' + vno).pipe(delay(400));
  }
}
