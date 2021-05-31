var observable = Rx.Observable.interval(1000);

observable
  .filter((value) => value % 2 === 0)
  .subscribe({
    next: (value) => console.log(value),
    error: (error) => console.log('Error: ', error),
  });
