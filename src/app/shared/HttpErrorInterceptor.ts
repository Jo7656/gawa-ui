// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpResponse,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpErrorServiceService } from './http-error-service.service';

// @Injectable()
// export class HtpErrorInterceptor implements HttpInterceptor {

//     constructor(private error: HttpErrorServiceService){}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return new Observable((observer) => {
//       next.handle(req).subscribe(
//         (res: HttpResponse<any>) => {
//           if (res instanceof HttpResponse) {
//             observer.next();
//           }
//         },
//         (err: HttpErrorResponse) => {
//           console.log('errpr loged from interceptor');
//           this.error.handleError(err);
//         }
//       );
//     });
//   }
// }
