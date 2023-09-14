import {CmsBannerComponentMedia, CmsParagraphComponent} from "@spartacus/core";

export interface BikeParagraphComponent extends CmsParagraphComponent {
  media: CmsBannerComponentMedia,
  url: string
}
