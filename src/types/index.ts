export interface FeatureOptions {
    outputDir: string;
    includeTable: boolean;
    includeForm: boolean;
    includeStore: boolean;
}

export interface TemplateData {
    featureName: string;
    featureNamePascal: string;
    featureNameCamel: string;
    featureNameKebab: string;
}
