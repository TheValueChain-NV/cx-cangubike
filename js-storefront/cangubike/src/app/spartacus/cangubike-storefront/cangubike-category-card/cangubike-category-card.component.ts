import { Component } from '@angular/core';
import {CmsComponentData, ParagraphComponent} from "@spartacus/storefront";
import {BikeParagraphComponent} from "../model/cms.model";
import {Router} from "@angular/router";
import {CmsBannerComponentMedia, ImageGroup, Image} from "@spartacus/core";


@Component({
  selector: 'app-cangubike-category-card',
  templateUrl: './cangubike-category-card.component.html',
  styleUrls: ['./cangubike-category-card.component.scss']
})
export class CangubikeCategoryCardComponent extends ParagraphComponent{
  constructor(public override component: CmsComponentData<BikeParagraphComponent>,  protected override router: Router) {
    super(component, router);
  }

  getImage(data: CmsBannerComponentMedia): Image | ImageGroup {
    if('url' in data) {
      return data as Image;
    } else {
      return data as ImageGroup;
    }
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
