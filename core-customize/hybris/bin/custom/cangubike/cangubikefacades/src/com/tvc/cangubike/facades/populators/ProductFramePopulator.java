package com.tvc.cangubike.facades.populators;

import de.hybris.platform.commercefacades.product.converters.populator.AbstractProductPopulator;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.type.TypeService;
import de.hybris.platform.servicelayer.type.impl.DefaultTypeService;

public class ProductFramePopulator<SOURCE extends ProductModel, TARGET extends ProductData>
        extends AbstractProductPopulator<SOURCE, TARGET> {
    private TypeService typeService;
    @Override
    public void populate(SOURCE productModel, TARGET productData) throws ConversionException {
        if (productModel.getFrame() != null) {
            System.out.println("This is a sysout: "+ productModel.getFrame());
            productData.setFrame(productModel.getFrame().getCode());
        }
    }

    public void setTypeService(TypeService typeService) {
        this.typeService = typeService;
    }
}
