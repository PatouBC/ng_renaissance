import { Pipe, PipeTransform } from '@angular/core';
import {Globals} from '../globals';

@Pipe({
  name: 'imagepath'
})
export class ImagepathPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return Globals.IMG_PATH_PREFIX + '/' + value;
  }
}
