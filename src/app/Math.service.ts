import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MathService {
    public name = 'George Reddy';

    public add(a, b) {
        return a + b;
    }
}
