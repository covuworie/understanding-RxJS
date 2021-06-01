// BehaviorSubject allows a default value to be initialized!
var clickEmitted = new Rx.BehaviorSubject('Not clicked');
var button = document.querySelector('button');
var div = document.querySelector('div');

button.addEventListener('click', () => clickEmitted.next('Clicked!'));

clickEmitted.subscribe((value) => (div.textContent = value));
