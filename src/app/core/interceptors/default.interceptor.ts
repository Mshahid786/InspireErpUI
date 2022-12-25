import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { LoadingService, LoadingOverlayRef } from 'src/app/shared/service/loading.service';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loadingRef: LoadingOverlayRef;
    Promise.resolve(null).then(() => loadingRef = this.loadingService.open());
    return next.handle(req).pipe(
      mergeMap((event: any) => {
        if (event instanceof HttpResponse && loadingRef) {
          loadingRef.close();
        }
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => {
        if (loadingRef) {
          loadingRef.close();
        }
        return of(err);
      })
    );


  }
}
