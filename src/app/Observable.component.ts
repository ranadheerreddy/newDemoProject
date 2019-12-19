import { Component } from '@angular/core';
import { Observable, from, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-observable',
    templateUrl: './Observable.component.html'
})
export class ObservableComponent {

    publisher1 = new Observable((observer) => {
        observer.next('aaa');
        observer.next('bbb');
        observer.next('ccc');
        observer.complete();
    });
    consumer1 = this.publisher1.subscribe(
        (res) => { console.log('success', res); },
        (error) => { console.error('error occured', error); },
        () => { console.log('completed'); }
    );
    array1 = ['raja', 2, 10, 30, 'james'];

    publisher2 = from(this.array1);

    consumer2 = this.publisher2.subscribe((res) => { console.log(res); }, (err) => { console.log('error', err); },
        () => { console.log('completed'); });

    publisher3 = range(5, 25);
    publisherEven = this.publisher3.pipe(filter((ele) => {
        return ele % 2 === 0;
    }));
    consumerEven = this.publisherEven.subscribe((succ) => {
        console.log('success', succ);
    });
    publisherCube = this.publisher3.pipe(map((a) => {
        return a * a * a;
    }));
    consumerCube = this.publisherCube.subscribe((succ) => {
        console.log('success cube', succ);
    });
}
