import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private routerRef: Router) { }

  products = [
    { pid: 1000, name: 'mobile', price: 10000 },
    { pid: 2000, name: 'Laptop', price: 40000 },
    { pid: 3000, name: 'computer', price: 20000 }
  ];

  viewDetails(pid) {
    this.routerRef.navigate(['/product-details', pid]);
  }

  ngOnInit() {
  }

}
