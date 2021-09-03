import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(private http:HttpClient) { }

  public sendDetails(data:any){
    return this.http.post<any>("",data);
  }
}
