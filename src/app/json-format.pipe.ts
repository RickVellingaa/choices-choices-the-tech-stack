import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFormat',
})
export class JsonFormatPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
