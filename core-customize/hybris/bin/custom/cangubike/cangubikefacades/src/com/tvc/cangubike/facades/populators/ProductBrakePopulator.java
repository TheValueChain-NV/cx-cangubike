package com.tvc.cangubike.facades.populators;

import de.hybris.platform.commercefacades.product.converters.populator.AbstractProductPopulator;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;


import java.util.Locale;

public class ProductBrakePopulator<SOURCE extends ProductModel, TARGET extends ProductData>
        extends AbstractProductPopulator<SOURCE, TARGET>{

    private CommonI18NService commonI18NService;
    @Override
    public void populate(SOURCE productModel, TARGET productData) throws ConversionException {
        Locale locale = commonI18NService.getLocaleForLanguage(commonI18NService.getCurrentLanguage());
        if (productModel.getBrake(locale) != null) {
            productData.setBrake(productModel.getBrake(locale));
        }
    }

    public void setCommonI18NService(CommonI18NService commonI18NService) {
        this.commonI18NService = commonI18NService;
    }

}
