/**
 * Convert string to PascalCase
 * Examples: user -> User, user-profile -> UserProfile
 */
export function toPascalCase(str: string): string {
    return str
        .split(/[-_\s]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

/**
 * Convert string to camelCase
 * Examples: user -> user, user-profile -> userProfile
 */
export function toCamelCase(str: string): string {
    const pascal = toPascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/**
 * Convert string to kebab-case
 * Examples: User -> user, UserProfile -> user-profile
 */
export function toKebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

/**
 * Replace template placeholders with actual values
 */
export function replaceTemplate(template: string, data: Record<string, string>): string {
    let result = template;
    for (const [key, value] of Object.entries(data)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        result = result.replace(regex, value);
    }
    return result;
}
