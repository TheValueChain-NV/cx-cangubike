package com.tvc.cangubike.facades.populators;

import de.hybris.platform.commercefacades.product.converters.populator.AbstractProductPopulator;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class ProductProductYearPopulator<SOURCE extends ProductModel, TARGET extends ProductData>
        extends AbstractProductPopulator<SOURCE, TARGET> {
    @Override
    public void populate(SOURCE productModel, TARGET productData) throws ConversionException {
        if (productModel.getModel_year() != null){
           productData.setModel_year(productModel.getModel_year());
        }
    }
}
