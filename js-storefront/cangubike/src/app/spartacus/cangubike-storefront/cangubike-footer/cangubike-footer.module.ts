import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeFooterComponent } from './cangubike-footer.component';
import {IconModule, NavigationModule} from "@spartacus/storefront";
import {ConfigModule, I18nModule} from "@spartacus/core";
import {footerCmsConfig} from "./config/footer.config";



@NgModule({
  declarations: [
    CangubikeFooterComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    ConfigModule.withConfig(footerCmsConfig),
    NavigationModule,
    I18nModule
  ]
})
export class CangubikeFooterModule { }
