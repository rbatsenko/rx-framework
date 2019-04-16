import { Observable } from 'rxjs';

const observable = new Observable(() => {
  setInterval(() => {
    console.log('Our first Observable <3');
  }, 3000);
});

observable.subscribe();