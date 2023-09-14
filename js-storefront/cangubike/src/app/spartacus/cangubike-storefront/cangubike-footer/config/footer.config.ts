import {CangubikeFooterComponent} from "../cangubike-footer.component";
import {CmsConfig} from "@spartacus/core";

export const footerCmsConfig = <CmsConfig> {
  cmsComponents: {
    FooterNavigationComponent: {
      component: CangubikeFooterComponent,
    },
  },
};
