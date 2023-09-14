import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeCarouselComponent } from './cangubike-carousel.component';
import {RouterLink} from "@angular/router";
import {UrlModule} from "@spartacus/core";
import {IconModule, MediaModule, PageComponentModule} from "@spartacus/storefront";



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
        IconModule
    ]
})
export class CangubikeCarouselModule { }
