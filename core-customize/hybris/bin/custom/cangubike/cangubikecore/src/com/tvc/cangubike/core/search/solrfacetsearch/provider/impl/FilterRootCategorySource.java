package com.tvc.cangubike.core.search.solrfacetsearch.provider.impl;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.search.solrfacetsearch.provider.impl.DefaultCategorySource;
import org.apache.commons.collections.CollectionUtils;

import java.util.Collection;
import java.util.Set;

public class FilterRootCategorySource extends DefaultCategorySource {

    @Override
    protected Collection<CategoryModel> getAllCategories(CategoryModel directCategory,
                                                         Set<CategoryModel> rootCategories) {
        final var allCategories = super.getAllCategories(directCategory, rootCategories);

        if(CollectionUtils.isNotEmpty(rootCategories)){
            allCategories.removeAll(rootCategories);
        }

        return allCategories;
    }
}
