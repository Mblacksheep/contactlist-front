import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BalancedBracketsService {

    constructor(private http: HttpClient) {
    }

    verify(param) {
        return this.http.post<any>(environment.apiUrl + "balanced-brackets", param);
    }
} 
