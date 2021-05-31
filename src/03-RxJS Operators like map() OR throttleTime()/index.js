var observable = Rx.Observable.interval(1000);
var observer = {
  next: (value) => console.log(value),
};

observable
  .map((value) => `Number: ${value}`)
  .throttleTime(1900)
  .subscribe(observer);
