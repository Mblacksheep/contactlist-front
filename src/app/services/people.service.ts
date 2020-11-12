import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private http: HttpClient) {
    }

    create(param) {
        return this.http.post<any>(environment.apiUrl + "person/create", param);
    }

    byId(param) {
        return this.http.get<any>(environment.apiUrl + "person/" + param);

    }

    all() {
        return this.http.get<any>(environment.apiUrl + "person");

    }

    delete(param) {
        return this.http.post<any>(environment.apiUrl + "person/delete", param);

    }
} 
