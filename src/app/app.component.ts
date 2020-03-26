import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data$ : Observable<any> = of([]);

  constructor(private service: AppService){}

  private url = '/api/now/table/sc_request?sysparm_limit=1';
  title = 'snow';

  ngOnInit(){
    this.data$ = this.service.get(this.url).pipe(
      catchError(err => [err])
      );
  }

  
}
