import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CostCenterOccModule, ExternalRoutesModule, ProductModule, ProductOccModule, UserModule, UserOccModule } from "@spartacus/core";
import { AddressBookModule, AnonymousConsentManagementBannerModule, AnonymousConsentsDialogModule, BannerCarouselModule, BannerModule, BreadcrumbModule, CategoryNavigationModule, CmsParagraphModule, ConsentManagementModule, FooterNavigationModule, HamburgerMenuModule, HomePageEventModule, LinkModule, LoginRouteModule, LogoutModule, MyAccountV2Module, MyCouponsModule, MyInterestsModule, NavigationEventModule, NavigationModule, NotificationPreferenceModule, PageTitleModule, PaymentMethodsModule, PDFModule, ProductCarouselModule, ProductDetailsPageModule, ProductFacetNavigationModule, ProductImagesModule, ProductIntroModule, ProductListingPageModule, ProductListModule, ProductPageEventModule, ProductReferencesModule, ProductSummaryModule, ProductTabsModule, ScrollToTopModule, SearchBoxModule, SiteContextSelectorModule, StockNotificationModule, TabParagraphContainerModule, VideoModule } from "@spartacus/storefront";
import { CartBaseFeatureModule } from './features/cart/cart-base-feature.module';
import { CartImportExportFeatureModule } from './features/cart/cart-import-export-feature.module';
import { CartQuickOrderFeatureModule } from './features/cart/cart-quick-order-feature.module';
import { CartSavedCartFeatureModule } from './features/cart/cart-saved-cart-feature.module';
import { WishListFeatureModule } from './features/cart/wish-list-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { OrganizationAccountSummaryFeatureModule } from './features/organization/organization-account-summary-feature.module';
import { OrganizationAdministrationFeatureModule } from './features/organization/organization-administration-feature.module';
import { OrganizationOrderApprovalFeatureModule } from './features/organization/organization-order-approval-feature.module';
import { OrganizationUnitOrderFeatureModule } from './features/organization/organization-unit-order-feature.module';
import { OrganizationUserRegistrationFeatureModule } from './features/organization/organization-user-registration-feature.module';
import { PickupInStoreFeatureModule } from './features/pickup-in-store/pickup-in-store-feature.module';
import { ProductConfiguratorFeatureModule } from './features/product-configurator/product-configurator-feature.module';
import { ProductBulkPricingFeatureModule } from './features/product/product-bulk-pricing-feature.module';
import { ProductFutureStockFeatureModule } from './features/product/product-future-stock-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { ProductVariantsFeatureModule } from './features/product/product-variants-feature.module';
import { S4omFeatureModule } from './features/s4om/s4om-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { StoreFinderFeatureModule } from './features/storefinder/store-finder-feature.module';
import { PersonalizationFeatureModule } from './features/tracking/personalization-feature.module';
import { UserFeatureModule } from './features/user/user-feature.module';
import { AsmFeatureModule } from './features/asm/asm-feature.module';
import { AsmCustomer360FeatureModule } from './features/asm/asm-customer360-feature.module';
import { PdfinvoicesModuleFeatureModule } from './features/pdf-invoices/pdfinvoices-module-feature.module';
import { RequestedDeliveryDateModuleFeatureModule } from './features/requested-delivery-date/requested-delivery-date-module-feature.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot(),
    LogoutModule,
    LoginRouteModule,
    HamburgerMenuModule,
    SiteContextSelectorModule,
    LinkModule,
    BannerModule,
    CmsParagraphModule,
    TabParagraphContainerModule,
    BannerCarouselModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    ScrollToTopModule,
    PageTitleModule,
    VideoModule,
    PDFModule,
    UserModule,
    UserOccModule,
    AddressBookModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    ConsentManagementModule,
    MyCouponsModule,
    AnonymousConsentsModule.forRoot(),
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    ProductModule.forRoot(),
    ProductOccModule,
    ProductDetailsPageModule,
    ProductListingPageModule,
    ProductListModule,
    SearchBoxModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    CostCenterOccModule,
    NavigationEventModule,
    HomePageEventModule,
    ProductPageEventModule,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    CartBaseFeatureModule,
    CartSavedCartFeatureModule,
    WishListFeatureModule,
    CartQuickOrderFeatureModule,
    CartImportExportFeatureModule,
    OrderFeatureModule,
    CheckoutFeatureModule,
    PersonalizationFeatureModule,
    OrganizationUserRegistrationFeatureModule,
    OrganizationAdministrationFeatureModule,
    OrganizationAccountSummaryFeatureModule,
    OrganizationUnitOrderFeatureModule,
    OrganizationOrderApprovalFeatureModule,
    ProductConfiguratorFeatureModule,
    StoreFinderFeatureModule,
    S4omFeatureModule,
    SmartEditFeatureModule,
    ProductFutureStockFeatureModule,
    ProductVariantsFeatureModule,
    ProductImageZoomFeatureModule,
    ProductBulkPricingFeatureModule,
    PickupInStoreFeatureModule,
    VideoModule,
    PDFModule,
    MyAccountV2Module,
    AsmFeatureModule,
    AsmCustomer360FeatureModule,
    PdfinvoicesModuleFeatureModule,
    RequestedDeliveryDateModuleFeatureModule
  ]
})
export class SpartacusFeaturesModule { }
