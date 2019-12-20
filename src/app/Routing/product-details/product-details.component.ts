import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectProduct: any;

  constructor(private ActRouteRef: ActivatedRoute) { }

  newProducts = [
    { name: 'John', age: 27, nationality: 'American' },
    { name: 'Smith', age: 41, nationality: 'European' },
    { name: 'Wills', age: 37, nationality: 'Mexican' },
  ];
  ngOnInit() {
    console.log(this.ActRouteRef);
    // this.selectProduct = this.ActRouteRef.params.value.pid;
    console.log(this.selectProduct);
  }
}
