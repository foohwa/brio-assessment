import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysBetween',
})
export class DaysBetweenPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    const lastUpdate = new Date(value);
    const today = new Date();
    const time = today.getTime() - lastUpdate.getTime();
    const daysBetween = time / (1000 * 3600 * 24);
    return daysBetween < 1 ? 'Today' : `${daysBetween.toFixed(0)} days ago`;
  }
}
