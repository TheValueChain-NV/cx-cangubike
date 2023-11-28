package com.tvc.cangubike.initialdata.services.impl;

import de.hybris.platform.commerceservices.dataimport.impl.CoreDataImportService;

public class CangubikeCoreDataImportService extends CoreDataImportService {

    @Override
    protected void importCommonData(final String extensionName){
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/common/essential-data.impex", extensionName),
                true);
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/common/countries.impex", extensionName), false);
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/common/delivery-modes.impex", extensionName),
                false);
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/common/projectdata_destinations.impex", extensionName), false);
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/common/themes.impex", extensionName), false);
//        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/common/cms-projectdata.impex",extensionName), false);

    }

    @Override
    protected void importContentCatalog(final String extensionName, final String contentCatalogName) {
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/contentCatalogs/%sContentCatalog/catalog.impex", extensionName, contentCatalogName), true);
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/contentCatalogs/%sContentCatalog/cms-content.impex", extensionName, contentCatalogName), true);
        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/contentCatalogs/%sContentCatalog/email-content.impex", extensionName, contentCatalogName), true);
    }
}
