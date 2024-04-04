import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeCarouselComponent } from './cangubike-carousel.component';
import {RouterLink} from "@angular/router";
import {UrlModule} from "@spartacus/core";
import {IconModule, MediaModule, PageComponentModule} from "@spartacus/storefront";
import {AddToCartModule} from "@spartacus/cart/base/components/add-to-cart";



@NgModule({
  declarations: [
    CangubikeCarouselComponent
  ],
  exports: [
    CangubikeCarouselComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        UrlModule,
        MediaModule,
        PageComponentModule,
        IconModule,
        AddToCartModule
    ]
})
export class CangubikeCarouselModule { }
