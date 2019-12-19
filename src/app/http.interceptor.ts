import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, retry, catchError } from 'rxjs/operators';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }
    toastr: any;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const updatedRequest = request.clone({
            headers: request.headers.set('Authorization', 'Some Code'),
            url: request.url.replace('https://', 'http://'),               // to change the HTTPS to HTTP
            responseType: 'text',
            withCredentials: true,
            body: { name: 'Google', URL: 'https://google.com' }
        });
        console.log('Before making Api:', updatedRequest);
        return next.handle(request).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        console.log('Api call success:', event);
                    }
                },
                error => {
                    if (error instanceof HttpErrorResponse && error.status === 404) {
                        console.log('Api call error:', error);
                        console.log('Error Message:' + error.message);
                    }
                }
            )
        );
    }
}
