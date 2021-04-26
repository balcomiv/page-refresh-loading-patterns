import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  of,
  ReplaySubject,
} from 'rxjs';
import { catchError, mapTo, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class RegisterService {
  //  https://stackoverflow.com/questions/32812661/rxjs-combinelatest-how-to-get-emit-after-just-one-value-changes
  currentSearchText = new ReplaySubject<string>(1);
  currentQuickFilters = new ReplaySubject<string>(1);
  searchFields = new ReplaySubject<string>(1);
  refreshToken = new BehaviorSubject(null);

  registerData: Observable<string>;

  constructor() {
    this.registerData = combineLatest([
      this.currentSearchText,
      this.currentQuickFilters,
      this.searchFields,
      this.refreshToken,
    ]).pipe(
      tap((values) => console.log('Tap: ', values)),
      switchMap((values) => {
        //  return of(`test data ${values}`);
        throw new Error('test error');
      })
    );

    //  Next some stuff
    this.currentSearchText.next('Search Text');
    this.currentQuickFilters.next('Quick Filters');
    this.searchFields.next('Search Fields Yall!');

    //  Testing Triggers
    // setTimeout(() => {
    //   this.currentSearchText.next('New search');
    // }, 5000);

    // setTimeout(() => {
    //   this.refreshToken.next(null);
    // }, 8000);
  }
}

function isLoading(
  trigger: Observable<unknown>,
  content: Observable<unknown>
): Observable<boolean> {
  return merge(
    trigger.pipe(mapTo(true)),
    content.pipe(
      catchError((e) => of(e)),
      mapTo(false)
    )
  );
}
