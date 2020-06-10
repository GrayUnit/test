import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    console.log(args);
    if(value) {
      if(args.length > 0){
        return value.totalTtc();
      }
      return value.totalHT();
    }
    return null;
  }

}
