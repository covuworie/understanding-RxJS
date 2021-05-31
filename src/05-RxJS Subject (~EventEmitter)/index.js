var subject = new Rx.Subject();

subject.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('Complete'),
});

subject.subscribe({
  next: (value) => console.log(value),
});

subject.next('A new data value');
// subject.error('Error');
subject.complete();
subject.next('New value'); // already complete
