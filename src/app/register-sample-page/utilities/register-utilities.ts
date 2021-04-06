import { merge, Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

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

/*
const currentSearchText = new ReplaySubject<string>(1);
const currentQuickFilters = new ReplaySubject<string>(1);
const searchFields = new ReplaySubject<string>(1);
const refreshToken = new BehaviorSubject(null);

const trigger = combineLatest([
  currentSearchText,
  currentQuickFilters,
  searchFields,
  refreshToken,
]);

//  Next some stuff
currentSearchText.next('Search Text');
currentQuickFilters.next('Quick Filters');
searchFields.next('Search Fields Yall!');

const data = of('test').pipe(
  map(() => {
    throw new Error('Boom');
  })
);



isLoading(trigger, data).subscribe((val) => {
  console.log(val);
});

*/
