import {LayoutConfig} from "@spartacus/storefront";

export const cangubikeLayoutConfig: LayoutConfig = {
  layoutSlots: {
    TopHeaderSection: {
      lg: {
        slots: ['SiteLinks'],
      },
      slots: [],
    },
      header: {
        lg: {
          slots: [
            'SiteLogo',
            'NavigationBar',
            'SearchBox',
            'SiteLogin',
            'MiniCart'
          ]
        },
        md: {
          slots: [
            'SiteLogo',
            'NavigationBar',
            'SiteLogin',
            'SearchBox',
            'MiniCart',
          ],
        },
        slots: ['PreHeader','BottomHeader','SiteLogo','SearchBox','MiniCart']
      },
      LandingPage2Template: {
        pageFold: 'Section1',
        slots: [
          'Section4',
          'Section1',
          'Section6A',
          'Section2A',
          'Section3',
          'Section5',

          //'Section2B',
          //'Section2C',
          //'Section2D',
          'Section6B',
          'Section7A',
          'Section7B',
          'Section8',
          'Section9',
          'Section10'
        ]

    },
    ProductDetailsPageTemplate: {
      pageFold: 'Summary',
      slots: [
        'Summary',
          'UpSelling',
          'CrossSelling',
          'Tabs',
        // 'PlaceholderContentSlot',
      ],
    },
    BottomNavSection: {
      lg: {
        slots: [],
      },
      slots: ['BottomNav']
    }
    }
}
