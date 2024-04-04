import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeStorefrontComponent } from './cangubike-storefront.component';
import {
  GlobalMessageComponentModule,
  KeyboardFocusModule, OutletModule,
  PageLayoutModule,
  PageSlotModule, ProductCarouselComponent, ProductIntroComponent
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
import {CangubikeProductCarouselModule} from "./cangubike-product-carousel/cangubike-product-carousel.module";
import {CangubikeProductCarouselComponent} from "./cangubike-product-carousel/cangubike-product-carousel.component";
import { CangubikeProductImagesComponent } from './cangubike-product-images/cangubike-product-images.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";





@NgModule({
  declarations: [
    CangubikeStorefrontComponent,
    CangubikeProductImagesComponent,
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
        },
        ProductSummaryComponent: {
          component: CangubikeProductImagesComponent
        },
        ProductImagesComponent: {
          component: ''
        },
        ProductIntroComponent: {
          component: ''
        },
        FutureStockComponent: {
          component: ''
        },
        BulkPricingTableComponent: {
          component: ''
        },
        ProductVariantSelectorComponent: {
          component: ''
        },
        ProductAddToCartComponent: {
          component: ''
        }

      }
    }),
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [
    provideConfig(cangubikeMediaConfig)
  ]
})
export class CangubikeStorefrontModule { }
