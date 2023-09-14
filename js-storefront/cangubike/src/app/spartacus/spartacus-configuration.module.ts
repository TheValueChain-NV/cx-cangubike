import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultB2bOccConfig } from "@spartacus/setup";
import {
  defaultCmsContentProviders,
  IconConfig,
  IconResourceType,
  layoutConfig,
  mediaConfig
} from "@spartacus/storefront";
import {environment} from "../../environments/environment";
import {cangubikeLayoutConfig} from "./layout.config";
import {cangubikeMediaConfig} from "./cangubike-media.config";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig),provideConfig(cangubikeLayoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: environment.occBaseUrl,
        endpoints: {
          product: 'products/${productCode}?fields=FULL'
        }
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      urlParameters: ['baseSite', 'language', 'currency'],
      baseSite: ['cangubike'],
      language: ['en','fr'],
      currency: ['EUR','USD'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '6.3'
    },
  }),provideConfig({
    icon: {
      symbols: {
        CART: 'bag',
        HOME: 'home',
        MENU: 'menu',
        USER: 'user',
        WISHLIST: 'wishlist',
        FB: 'fab fa-facebook',
        LINKEDIN: 'fab fa-linkedin',
        INSTAGRAM: 'fab fa-instagram',
        TWITTER: 'fa-twitter',
        YOUTUBE: 'fab fa-youtube',
        FRAME: 'frame',
      },
      resources: [
        {
          type: IconResourceType.SVG,
          url: './assets/icons-sheet.svg',
          types: ['CART', 'HOME', 'MENU', 'USER', 'WISHLIST','FRAME'],
        },
        {
          type: IconResourceType.LINK,
          url: 'https://use.fontawesome.com/releases/v6.3.0/css/all.css',
        },
      ],
    },
  } as IconConfig), provideConfig(defaultB2bOccConfig)]
})
export class SpartacusConfigurationModule { }
