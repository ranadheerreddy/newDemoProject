import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MathService } from './Math.service';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  cardNumber = '12345678910';
  employeeForm: FormGroup;
  fullNameLength = 0;
  gender = 'male';
  pNames = ['John', 'Smith', 'Joe'];

  newParentNames: string;
  pFruit: string;
  pTree: string;
  sumData: any;

  constructor(public mathRef: MathService, private fb: FormBuilder, private httpRef: HttpClient) {
    this.httpRef.get('https://jsonplaceholder.typicode.com/posts').pipe(startWith([]), takeUntil(this.ngUnsubscribe))
      .subscribe((result) => {
        console.log('Http call success', result);
      },
        (error) => {
          console.log('Http call failed', error);
        });
  }
  @ViewChild(ChildComponent, { static: false }) child: ChildComponent;

  ngAfterViewInit() {
    console.log(this.child.whoamI());
  }

  updateNames() {
    this.pNames.push(this.newParentNames);
  }

  getParentTree(data) {
    this.pTree = data;
  }
  getParentFruit(data) {
    this.pFruit = data;
  }
  ngOnInit() {
    this.sumData = this.mathRef.add(10, 20);
    console.log(this.sumData);
    // Form Group Approach
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     city: new FormControl(),
    //     state: new FormControl()
    //   })
    // });

    // Form Builder Approach
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: ['']
      })
    });
  }

  saveUser(ngForm: NgForm) {
    console.log(ngForm.value);
  }
  saveUserData(): void {
    console.log(this.employeeForm.value);
  }
  addressLoadData() {
    this.employeeForm.patchValue({
      address: {
        street: 'Marathahalli',
        city: 'Bangalore',
        state: 'Karnataka'
      }
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
