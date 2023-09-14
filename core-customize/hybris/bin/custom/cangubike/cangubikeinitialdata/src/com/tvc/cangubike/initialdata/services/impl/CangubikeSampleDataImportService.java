package com.tvc.cangubike.initialdata.services.impl;

import de.hybris.platform.commerceservices.dataimport.impl.SampleDataImportService;
import de.hybris.platform.commerceservices.setup.AbstractSystemSetup;
import de.hybris.platform.core.initialization.SystemSetupContext;

public class CangubikeSampleDataImportService extends SampleDataImportService {

    public static final String IMPORT_SAMPLE_DATA = "importSampleData";


    public void importExtraData(final AbstractSystemSetup systemSetup, final SystemSetupContext context) {

        final boolean importSampleData = systemSetup.getBooleanSystemSetupParameter(context, IMPORT_SAMPLE_DATA);

        if(importSampleData) {
            final String extensionName = context.getExtensionName();

            getSetupImpexService().importImpexFile(String.format("/%s/import/sampledata/backoffice/registration/users.impex", extensionName),
                    false);
            getSetupImpexService().importImpexFile(String.format("/%s/import/sampledata/accountsummary/documents.impex", extensionName),
                    false);
        }
    }

    public void importCommerceOrgData(final AbstractSystemSetup systemSetup, final SystemSetupContext context) {
        final boolean importSampleData = systemSetup.getBooleanSystemSetupParameter(context, IMPORT_SAMPLE_DATA);
        if(importSampleData) {
            final String extensionName = context.getExtensionName();
            getSetupImpexService().importImpexFile(String.format("/%s/import/sampledata/commerceorg/cms-content.impex", extensionName),
                    false);
            getSetupImpexService().importImpexFile(String.format("/%s/import/sampledata/commerceorg/user-groups.impex", extensionName),
                    false);

        }
    }

    @Override
    protected void importContentCatalog(final String extensionName, final String contentCatalogName){
        getSetupImpexService()
                .importImpexFile(String.format("/%s/import/sampledata/contentCatalogs/%sContentCatalog/cms-content.impex",
                        extensionName, contentCatalogName), false);
        getSetupImpexService()
                .importImpexFile(String.format("/%s/import/sampledata/contentCatalogs/%sContentCatalog/cms-responsive-content.impex",
                        extensionName, contentCatalogName), false);
        getSetupImpexService()
                .importImpexFile(String.format("/%s/import/sampledata/contentCatalogs/%sContentCatalog/email-content.impex",
                        extensionName, contentCatalogName), false);
    }
}
