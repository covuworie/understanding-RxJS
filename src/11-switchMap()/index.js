var button = document.querySelector('button');

var obs1 = Rx.Observable.fromEvent(button, 'click');
var obs2 = Rx.Observable.interval(1000);

// switches to new observable and cancels the previous one
obs1.switchMap((event) => obs2).subscribe((value) => console.log(value));
