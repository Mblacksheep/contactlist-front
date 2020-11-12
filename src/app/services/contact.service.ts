import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) {
    }

    create(param) {
        return this.http.post<any>(environment.apiUrl + "contact/create", param);
    }

    byId(param) {
        return this.http.get<any>(environment.apiUrl + "contact/" + param);

    }

    list(param) {
        return this.http.post<any>(environment.apiUrl + "person/contacts", param);
    }

    delete(param) {
        return this.http.post<any>(environment.apiUrl + "contact/delete", param);

    }

    getTypeList() {
        return this.http.get<any>(environment.apiUrl + "contact-type");
    }
} 
