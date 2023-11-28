import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeProductCarouselComponent } from './cangubike-product-carousel.component';
import {CarouselModule, ProductListItemContext, ProductListItemContextSource} from "@spartacus/storefront";
import {I18nModule} from "@spartacus/core";
import {CangubikeCarouselModule} from "../shared/components/cangubike-carousel/cangubike-carousel.module";
import {CangubikeCarouselComponent} from "../shared/components/cangubike-carousel/cangubike-carousel.component";



@NgModule({
  declarations: [
    CangubikeProductCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    I18nModule,
    CangubikeCarouselModule,
    CangubikeCarouselModule,

  ],
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ],
})
export class CangubikeProductCarouselModule { }
