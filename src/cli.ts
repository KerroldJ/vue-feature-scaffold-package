#!/usr/bin/env node

import { Command } from 'commander';
import { generateFeature } from './generators/featureGenerator.js';
import chalk from 'chalk';

const program = new Command();

program
    .name('vue-feature')
    .description('CLI tool to generate feature-based Vue.js architecture for Laravel projects')
    .version('0.1.0');

program
    .command('generate <feature-name>')
    .description('Generate a new feature with Vue components, composables, and services')
    .option('-d, --dir <path>', 'Output directory', 'src')
    .option('--no-table', 'Skip table component generation')
    .option('--no-form', 'Skip form component generation')
    .option('--store', 'Add Pinia store')
    .action(async (featureName: string, options) => {
        try {
            console.log(chalk.blue(`\n🚀 Generating feature: ${featureName}\n`));

            await generateFeature(featureName, {
                outputDir: options.dir,
                includeTable: options.table,
                includeForm: options.form,
                includeStore: options.store,
            });

            console.log(chalk.green(`\n✨ Feature "${featureName}" generated successfully!\n`));
        } catch (error) {
            console.error(chalk.red(`\n❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}\n`));
            process.exit(1);
        }
    });

program.parse();
