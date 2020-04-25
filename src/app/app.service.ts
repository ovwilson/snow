import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class AppService {

  constructor(private http: HttpClient) { }

  get(url: string, headers: HttpHeaders ) { return this.http.get(url, { headers } ); }

}
