import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class APIService {

    constructor(private http: HttpClient) { }

    get(url: string) {
        return this.http.get(url).pipe(
            map((data: any) => data.result));
    }

}
