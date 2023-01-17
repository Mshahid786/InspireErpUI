import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatementOfAcocuntService {
  baseUrl: string = environment.apiRootURL;
  constructor(private http: HttpClient) { }
  GetStatementOfAccountSummary(payload:any) {
    return this.http.post('http://localhost:53447/api/StatementOfAccountSummary/StatementOfAccountSummaryResponse',payload);
  }
}
