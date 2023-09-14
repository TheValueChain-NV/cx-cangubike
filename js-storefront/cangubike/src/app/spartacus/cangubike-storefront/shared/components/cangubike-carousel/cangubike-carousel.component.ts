import { Component } from '@angular/core';
import {CarouselComponent, ProductCarouselItemComponent} from "@spartacus/storefront";

@Component({
  selector: 'app-cangubike-carousel',
  templateUrl: './cangubike-carousel.component.html',
  styleUrls: ['./cangubike-carousel.component.scss']
})
export class CangubikeCarouselComponent extends ProductCarouselItemComponent{
  sliceLongText(text: string, numberOfChars: number): string {
    if (text == undefined) {
      return '';
    }
    if (text.length > numberOfChars) {
      let limit = text.substring(0, numberOfChars).lastIndexOf(' ');
      return `${text.substring(0, limit)}...`;
    }
    return text;
  }
}
