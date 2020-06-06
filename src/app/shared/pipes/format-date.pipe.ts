import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
    transform(value: any, reverse: boolean = true): string {
        if (!value)
            return value;

        const date = new Date(value);
        let day = date.getDate();
        let month = date.getMonth() + 1; // add 1 because months are indexed from 0
        let year = date.getFullYear();

        if (reverse)
            return year + '/' + (month < 10 ? '0' + month : month) + '/' + (day < 10 ? '0' + day : day);
        else
            return (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + year;
    }
}