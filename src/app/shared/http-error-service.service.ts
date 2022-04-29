import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorServiceService {

  constructor( private toaster: ToastrService) { }

  public handleError(err:HttpErrorResponse){
    let errorMessage : string;

    if(err.error instanceof ErrorEvent){
      errorMessage= `An error occured :${err.error.message}`
    }else{
      errorMessage="Something went wrong"
    }
    this.toaster.error(errorMessage);
    console.log("error logged from HttpErrorServiceService")
  }
 


}
