import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import {AppRoutingModule, GenericLinkModule, IconModule, PageSlotModule} from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import {UrlModule} from "@spartacus/core";
import {CangubikeStorefrontModule} from "./spartacus/cangubike-storefront/cangubike-storefront.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    IconModule,
    GenericLinkModule,
    UrlModule,
    PageSlotModule,
    CangubikeStorefrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
