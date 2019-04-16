import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log('Our ' + x + ' observable <3'));

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);