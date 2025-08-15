import { readFileSync } from 'fs';

/**
 * Reads package.json and returns its parsed object.
 * Works in ESM without import assertions.
 */
export function getPackageInfo() {
    const pkg = JSON.parse(
        readFileSync(new URL('../../package.json', import.meta.url))
    );
    return pkg;
}
