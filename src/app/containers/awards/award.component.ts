import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as fromRoot from './../../app.reducer';
import { Store } from '@ngrx/store';
import { UsersPageActions, UsersAPIActions, User, fromUsersSelectors } from './../../features';

@Component({
    templateUrl: './award.component.html'
})
export class AwardComponent implements OnInit {

    users$: Observable<User[]> = of<User[]>([]);

    input$: Observable<string> = of<string>();

    myControl = new FormControl();

    constructor(private store: Store<fromRoot.AppState>) {
        this.users$ = this.store.select(fromUsersSelectors.selectUsers);
    }

    ngOnInit(): void {

        this.input$ = this.myControl.valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            tap(value => this.store.dispatch(UsersAPIActions.SearchUsers({ term: value }))));
    }

}
