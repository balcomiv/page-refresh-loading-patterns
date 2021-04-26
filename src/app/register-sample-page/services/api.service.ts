import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getData(): Observable<unknown> {
    return of('this is simulated response').pipe(delay(1000));
  }
}
