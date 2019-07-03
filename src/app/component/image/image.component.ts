import {Component, Input, OnInit} from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imgPath: string;
  @Input() alt: string;
  imgLoaded: boolean;
  src: string;


  constructor() { }

  ngOnInit() {
    this.src = Globals.IMG_PATH_PREFIX + this.imgPath;
  }
  onImageLoad() {
    this.imgLoaded = true;
  }
}
