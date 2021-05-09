import { CryptoPairs } from './../constants/pairs';

export const transformPairsToArray = (_enum: typeof CryptoPairs): string[] => {
    const filtered: (string)[] = Object.keys(_enum);
    return filtered.filter(value => value && typeof value !== "number");
}