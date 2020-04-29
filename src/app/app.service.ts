import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class AppService {

  constructor(private http: HttpClient) { }

  get(url: string) { return this.http.get(url); }

}
