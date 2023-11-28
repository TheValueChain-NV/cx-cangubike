import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeCategoryCardComponent } from './cangubike-category-card.component';
import {GenericLinkModule, MediaModule, SupplementHashAnchorsModule} from "@spartacus/storefront";
import {CmsConfig, I18nModule, provideDefaultConfig} from "@spartacus/core";

declare module '@spartacus/core' {
  interface Product {
    brand?: string;
    frame?: string;
    brake?: string;
    saddle?: string;
    year_model?: string;
  }
}

@NgModule({
  declarations: [
    CangubikeCategoryCardComponent
  ],
    imports: [
        CommonModule,
        SupplementHashAnchorsModule,
        MediaModule,
        GenericLinkModule,
        I18nModule
    ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        BikeParagraphComponent: {
          component: CangubikeCategoryCardComponent,
        }
      },
    }),
  ],
  exports: [CangubikeCategoryCardComponent]
})
export class CangubikeCategoryCardModule { }
