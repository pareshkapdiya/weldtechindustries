import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // Enquiry
  sendEnquiry(userName: string, companyName: string, country: string, email: string, pnumber: number,
              mnumber: number, fax: string, note: string, captchaResponse: string): Observable<any> {
    const body = JSON.stringify({
      'userName': userName,
      'companyName': companyName,
      'country': country,
      'email': email,
      'pnumber': pnumber,
      'mnumber': mnumber,
      'fax': fax,
      'note': note,
      'captchaResponse': captchaResponse
    });
    return this.http.post(`${environment.ApiURL}/enquiry`, body, { headers: this.headers });
  }

  // Contact
  sendContact(userName: string, email: string, subject: string, message: string, captchaResponse: string): Observable<any> {
    const body = JSON.stringify({
      'userName': userName,
      'email': email,
      'subject': subject,
      'message': message,
      'captchaResponse': captchaResponse
    });
    return this.http.post(`${environment.ApiURL}/contact`, body, { headers: this.headers });
  }

}
