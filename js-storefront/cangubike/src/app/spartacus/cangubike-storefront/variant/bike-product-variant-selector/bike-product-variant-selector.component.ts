import {Component, Input} from '@angular/core';
import {ProductVariantStyleSelectorComponent} from "@spartacus/product/variants/components";
import {Occ} from "@spartacus/core";
import VariantOptionQualifier = Occ.VariantOptionQualifier;
import BaseOption = Occ.BaseOption;


@Component({
  selector: 'app-bike-product-variant-selector',
  templateUrl: './bike-product-variant-selector.component.html',
  styleUrls: ['./bike-product-variant-selector.component.scss']
})
export class BikeProductVariantSelectorComponent extends ProductVariantStyleSelectorComponent{

  override getVariantOptionValue(qualifiers: VariantOptionQualifier[] | any) {
    const obj = qualifiers.find((q) => q.qualifier === 'frame_size');
    console.log('This is a log ', this.variants);
    return obj ? obj.value : '';
  }


}
