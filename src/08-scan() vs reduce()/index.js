var input = document.querySelector('input');
var observable = Rx.Observable.of(1, 2, 3, 4, 5);

observable
  // reduce all elements to one value if you are interested in final value only
  // note that the observable must complete
  .reduce((total, currentValue) => total + currentValue, 0)
  .subscribe({
    next: (value) => console.log(value),
  });

observable
  // reduce all elements but you are interested in intermediate values
  // note that the observable does not need to complete
  .scan((total, currentValue) => total + currentValue, 0)
  .subscribe({
    next: (value) => console.log(value),
  });
