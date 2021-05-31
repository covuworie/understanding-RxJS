var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
  // extracts property from an object (a better alternative to map for objects)
  // here the object is the event and we extract the target property
  // and then its value property
  .pluck('target', 'value')
  .debounceTime(500)
  .distinctUntilChanged()
  .subscribe({
    next: (value) => console.log(value),
  });
