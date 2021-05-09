import { transformPairsToArray } from './../utils/index';
import { FIATPairs, CryptoPairs } from './../constants/pairs';
import { config } from 'dotenv';

config()
export const getRatesByDefaultFIAT = () => {
    const defaultFIAT: FIATPairs | string = FIATPairs.USD;
    const pairsList: any = transformPairsToArray(CryptoPairs)
        .reduce((acc, curr) => ({
            ...acc,
            [curr]: `${process.env.TICKER_API_URL!}${curr}-${defaultFIAT}`
        }),
        {});
    
    return pairsList;
}
