import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'agePipe',
    pure: true
})
class AgePipe implements PipeTransform {

    transform(input: number) {
    }
}
