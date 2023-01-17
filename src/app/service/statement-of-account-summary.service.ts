import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/Common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatementOfAccountSummaryService {
  baseUrl : string =environment.apiRootURL;
  constructor(private http:HttpClient) { }
  GetStatementOfAccountSummary(){
    return this.http.get('http://localhost:53447/api/StatementOfAccountSummary/StatementOfAccountSummaryResponse');
  }
}
