import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeStorefrontComponent } from './cangubike-storefront.component';
import {
  BreadcrumbModule,
  GlobalMessageComponentModule,
  KeyboardFocusModule, OutletModule,
  PageLayoutModule,
  PageSlotModule, ProductCarouselComponent
} from "@spartacus/storefront";
import {RouterOutlet} from "@angular/router";
import {CangubikeFooterModule} from "./cangubike-footer/cangubike-footer.module";
import {
  BikeProductVariantSelectorModule
} from "./variant/bike-product-variant-selector/bike-product-variant-selector.module";
import {CangubikeCategoryCardModule} from "./cangubike-category-card/cangubike-category-card.module";
import {CangubikeBreadcrumbsModule} from "./cangubike-breadcrumbs/cangubike-breadcrumbs.module";
import {ConfigModule, provideConfig} from "@spartacus/core";
import {cangubikeMediaConfig} from "../cangubike-media.config";
import {CangubikeCarouselModule} from "./shared/components/cangubike-carousel/cangubike-carousel.module";
import {CangubikeCarouselComponent} from "./shared/components/cangubike-carousel/cangubike-carousel.component";
import {CangubikeProductCarouselModule} from "./cangubike-product-carousel/cangubike-product-carousel.module";
import {CangubikeProductCarouselComponent} from "./cangubike-product-carousel/cangubike-product-carousel.component";





@NgModule({
  declarations: [
    CangubikeStorefrontComponent,
  ],
  exports: [
    CangubikeStorefrontComponent,
  ],
  imports: [
    CommonModule,
    KeyboardFocusModule,
    PageLayoutModule,
    PageSlotModule,
    GlobalMessageComponentModule,
    RouterOutlet,
    OutletModule,
    CangubikeBreadcrumbsModule,
    CangubikeFooterModule,
    BikeProductVariantSelectorModule,
    CangubikeCategoryCardModule,
    CangubikeProductCarouselModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductCarouselComponent: {
          component: CangubikeProductCarouselComponent,
        },
        BikeCategoryCarouselComponent: {
          component: ProductCarouselComponent
        }
      }
    })
  ],
  providers: [
    provideConfig(cangubikeMediaConfig)
  ]
})
export class CangubikeStorefrontModule { }
