import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
  add(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
}
