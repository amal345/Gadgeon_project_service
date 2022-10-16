import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customer'
})
export class CustomerPipe implements PipeTransform {

  transform(value: string,name:string): string{
    return 'firstname ' +name 
  }

}
