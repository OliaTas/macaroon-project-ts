import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenAdvantage'
})
export class ShortenAdvantagePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length > 95) {
      return value.substring(0, 95) + '...';
    }

    return value;
  }

}
