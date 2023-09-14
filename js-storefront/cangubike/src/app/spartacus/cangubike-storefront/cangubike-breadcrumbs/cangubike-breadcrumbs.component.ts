import { Component } from '@angular/core';
import {BreadcrumbComponent, CmsComponentData} from "@spartacus/storefront";
import {combineLatest} from "rxjs";
import {CmsBreadcrumbsComponent, PageMetaService, TranslationService} from "@spartacus/core";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-cangubike-breadcrumbs',
  templateUrl: './cangubike-breadcrumbs.component.html',
  styleUrls: ['./cangubike-breadcrumbs.component.scss']
})
export class CangubikeBreadcrumbsComponent extends BreadcrumbComponent {


}
