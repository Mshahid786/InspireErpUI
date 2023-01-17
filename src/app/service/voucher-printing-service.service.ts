import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoucherPrintingServiceService {
  
  //ApiUrl = "http://localhost:53447/api/VoucherPrinting/GetVoucherPrinting";
  baseUrl :string =environment.apiRootURL; 
  constructor(private http:HttpClient) {}
  GetVoucherPrinting(payload:any){
    console.log(payload);
    // return this.http.post(this.baseUrl+'VoucherPrinting/GetVoucherPrinting',payload);
    return this.http.get(this.baseUrl+'VoucherPrinting/VoucherPrintingResponse',payload);
  }

}
