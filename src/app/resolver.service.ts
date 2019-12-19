import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ResolverService implements Resolve<any> {
    constructor(private httpref: HttpClient) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log('route parameter', route.params.name);
        return this.httpref.get('https://jsonplaceholder.typicode.com/posts');
    }
}
