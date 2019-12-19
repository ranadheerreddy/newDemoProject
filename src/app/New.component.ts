import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'new-comp',
    templateUrl: './app.Newcomponent.html'
})
export class NewComponent implements OnInit {
    constructor(private httpRef: HttpClient) { }
    UrlOutput;
    ngOnInit() {
        this.httpRef.get('https://jsonplaceholder.typicode.com/posts').subscribe(
            (succ) => {
                console.log('succesful', succ);
                this.UrlOutput = succ;
            }, (error) => {
                console.log('error occured', error);
            });
    }
}
