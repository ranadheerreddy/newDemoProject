import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'accountPipe',
    pure: true
})
export class AccountPipe implements PipeTransform {
    transform(input: any) {
        const len = input.length;
        const output = input.slice(0 - 5) + '*' + input.slice(5 - 10);
    }

}
