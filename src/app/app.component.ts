import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data$: Observable<any> = of([]);

  constructor(private service: AppService) { }

  private userName = (window as any).NOW ? (window as any).NOW.user.name : '';
  private token = (window as any).g_ck || '';
  private uri = '/api/now/table/sys_user';
  private query = 'sysparm_query=user_name%3D{{userName}}';
  private limit = 'sysparm_limit=1';
  private fields = 'sysparm_fields=';
  private headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('X-UserToken', this.token);
  private url = `${this.uri}?${this.query.replace('{{userName}}', this.userName)}&${this.limit}`;

  title = 'snow';

  ngOnInit() {

    this.data$ = this.service.get(this.url, this.headers).pipe(
      tap(data => console.log(data)),
      catchError(err => [err])
    );
  }

}

