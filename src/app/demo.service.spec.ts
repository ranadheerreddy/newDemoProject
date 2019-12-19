import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

const obj = new DemoService();
describe('DemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoService = TestBed.get(DemoService);
    expect(service).toBeTruthy();
  });
});

describe('Testing Demo Service methods', () => {
  it('testing Add method', () => {
    expect(obj.add(1, 2)).toBe(3);
  });
  it('testing sub method', () => {
    expect(obj.sub(1, 2)).toBe(-1);
  });
  it('testing mul method', () => {
    expect(obj.mul(1, 2)).toBe(2);
  });
});


describe('demoservice test', () => {
  beforeAll(() => {
    console.log('before all');
  });
  beforeEach(() => {
    console.log('before each');
  });
  afterEach(() => {
    console.log('after each');
  });
  afterAll(() => {
    console.log('after all');
  });
  it('checking truthy', () => {
    const a = 1;
    expect(a).toBeTruthy();
  });

});
