import { BehaviorSubject, combineLatest, of, ReplaySubject } from 'rxjs';
import { isLoading } from './register-utilities';

describe('isLoading()', () => {
  it('should be called once', () => {
    //  Arrange
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

    const data = of('test')
      .pipe
      // map(() => {
      //   throw new Error('Boom');
      // })
      ();

    const loading = isLoading(trigger, data).subscribe((val) => {
      console.log(val);
    });

    //  Act

    //  Assert
    expect(loading).toHaveBeenCalledTimes(1);
  });
});
