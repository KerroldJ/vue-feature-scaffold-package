import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileEnsureDir, directoryExists } from '../utils/fileHelpers.js';
import { toPascalCase, toCamelCase, toKebabCase, replaceTemplate } from '../utils/stringHelpers.js';
import type { FeatureOptions, TemplateData } from '../types/index.js';
import ora from 'ora';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Generate a complete feature with all files
 */
export async function generateFeature(featureName: string, options: FeatureOptions): Promise<void> {
    const spinner = ora('Validating output directory...').start();

    try {
        // Validate that the output directory exists
        const outputDirPath = join(process.cwd(), options.outputDir);
        const dirExists = await directoryExists(outputDirPath);

        if (!dirExists) {
            spinner.fail(`Directory does not exist: ${options.outputDir}`);
            throw new Error(
                `Output directory '${options.outputDir}' does not exist.\n` +
                `Please create it first or use an existing directory.\n` +
                `Current working directory: ${process.cwd()}`
            );
        }

        spinner.text = 'Generating feature files...';

        // Prepare template data
        const templateData: TemplateData = {
            featureName,
            featureNamePascal: toPascalCase(featureName),
            featureNameCamel: toCamelCase(featureName),
            featureNameKebab: toKebabCase(featureName),
        };

        const featureDir = join(process.cwd(), options.outputDir, templateData.featureNameCamel);

        // Generate Index.vue
        spinner.text = 'Generating Index.vue...';
        await generateFromTemplate(
            'Index.vue.template',
            join(featureDir, 'Index.vue'),
            templateData
        );

        // Generate components
        if (options.includeTable) {
            spinner.text = 'Generating Table component...';
            await generateFromTemplate(
                'Table.vue.template',
                join(featureDir, 'components', `${templateData.featureNamePascal}Table.vue`),
                templateData
            );
        }

        if (options.includeForm) {
            spinner.text = 'Generating Form component...';
            await generateFromTemplate(
                'Form.vue.template',
                join(featureDir, 'components', `${templateData.featureNamePascal}Form.vue`),
                templateData
            );
        }

        // Generate composable
        spinner.text = 'Generating composable...';
        await generateFromTemplate(
            'useComposable.ts.template',
            join(featureDir, 'composables', `use${templateData.featureNamePascal}.ts`),
            templateData
        );

        // Generate service
        spinner.text = 'Generating API service...';
        await generateFromTemplate(
            'api.ts.template',
            join(featureDir, 'services', `${templateData.featureNameCamel}Api.ts`),
            templateData
        );

        // Generate types
        spinner.text = 'Generating types...';
        await generateFromTemplate(
            'types.ts.template',
            join(featureDir, 'types.ts'),
            templateData
        );

        spinner.succeed('Feature generated successfully!');
    } catch (error) {
        spinner.fail('Failed to generate feature');
        throw error;
    }
}

/**
 * Generate a file from a template
 */
async function generateFromTemplate(
    templateName: string,
    outputPath: string,
    data: TemplateData
): Promise<void> {
    const templatePath = join(__dirname, '../../templates', templateName);
    const templateContent = await readFile(templatePath, 'utf-8');

    const replacements: Record<string, string> = {
        FEATURE_NAME: data.featureName,
        FEATURE_PASCAL: data.featureNamePascal,
        FEATURE_CAMEL: data.featureNameCamel,
        FEATURE_KEBAB: data.featureNameKebab,
    };

    const fileContent = replaceTemplate(templateContent, replacements);
    await writeFileEnsureDir(outputPath, fileContent);
}
