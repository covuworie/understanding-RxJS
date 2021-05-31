var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
  .map((event) => event.target.value)
  // gives the latest value after 0.5s of no value being emitted
  .debounceTime(500)
  // only emits event if the value has changed from previously
  .distinctUntilChanged()
  .subscribe({
    next: (value) => console.log(value),
  });
