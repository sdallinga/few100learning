export function formatName(first: string, last: string, fn: (x: string) => string) {
    return fn(`${last}, ${first}`);
}
