import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoucherPrintingServiceService {
  
  ApiUrl = "http://localhost:53447/api/VoucherPrinting/GetVoucherPrinting";
  constructor(private http:HttpClient) {}
  GetVoucherPrinting(payload:any){
    console.log(payload);
    console.log(this.ApiUrl);
    return this.http.post(this.ApiUrl,payload);
  }

}
