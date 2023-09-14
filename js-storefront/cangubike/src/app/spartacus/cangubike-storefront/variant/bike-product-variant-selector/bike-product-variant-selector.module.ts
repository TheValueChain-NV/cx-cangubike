import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeProductVariantSelectorComponent } from './bike-product-variant-selector.component';
import {I18nModule} from "@spartacus/core";



@NgModule({
  declarations: [
    BikeProductVariantSelectorComponent
  ],
    imports: [
        CommonModule,
        I18nModule
    ]
})
export class BikeProductVariantSelectorModule { }
