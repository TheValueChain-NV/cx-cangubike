import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CangubikeBreadcrumbsComponent } from './cangubike-breadcrumbs.component';
import {RouterLink} from "@angular/router";
import {CmsConfig, provideConfig, provideDefaultConfig} from "@spartacus/core";
import {CangubikeCategoryCardComponent} from "../cangubike-category-card/cangubike-category-card.component";



@NgModule({
  declarations: [
    CangubikeBreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    CangubikeBreadcrumbsComponent
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        BreadcrumbComponent: {
          component: CangubikeBreadcrumbsComponent,
        }
      },
    }),
  ]
})
export class CangubikeBreadcrumbsModule { }
