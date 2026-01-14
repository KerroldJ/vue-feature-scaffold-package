import { mkdir, writeFile, access } from 'fs/promises';
import { dirname } from 'path';
import { constants } from 'fs';

/**
 * Ensure directory exists, create if it doesn't
 */
export async function ensureDir(dirPath: string): Promise<void> {
    try {
        await mkdir(dirPath, { recursive: true });
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
            throw error;
        }
    }
}

/**
 * Check if a directory exists
 */
export async function directoryExists(dirPath: string): Promise<boolean> {
    try {
        await access(dirPath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

/**
 * Write file and ensure directory exists
 */
export async function writeFileEnsureDir(filePath: string, content: string): Promise<void> {
    await ensureDir(dirname(filePath));
    await writeFile(filePath, content, 'utf-8');
}
