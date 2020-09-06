import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUploaderService {

  constructor(private httpClient:HttpClient) {
   }

   uploadExcelFile(formData: FormData): Observable<any>{
     return this.httpClient.post<any>("http://localhost:8081/uploadFile", formData);
   }
}
