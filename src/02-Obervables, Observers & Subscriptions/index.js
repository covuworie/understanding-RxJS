var button = document.querySelector('button');

var observer = {
  next: (event) => console.log(event),
  error: (error) => console.log(error), // will never be called in this case
  complete: () => console.log('Completed'), // will never be called in this case
};

// Synchronous
// Create an Observable from an event
// Rx.Observable.fromEvent(button, 'click')
// Create an Observable from scratch
Rx.Observable.create((obs) => {
  obs.next('A value');
  // obs.error('Error');  // No more values emitted after an error
  obs.complete(); // No more values emitted after complete
  obs.next('A second value');
}).subscribe(observer);

// Asynchronous
Rx.Observable.create((obs) => {
  obs.next('A value');
  // obs.error('Error');  // No more values emitted after an error
  setTimeout(() => {
    obs.complete();
  }, 2000);
  obs.next('A second value');
}).subscribe(observer);

// Recreate an observable from an event from scratch (instead of fromEvent method)
var subscription = Rx.Observable.create((obs) => {
  button.onclick = (event) => {
    obs.next(event);
  };
}).subscribe(observer);

// unsubscribe since the observable never completes
setTimeout(() => subscription.unsubscribe(), 5000);
