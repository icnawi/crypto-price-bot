import { CryptoPairs, FIATPairs } from "../constants/pairs";

export interface Markets {
    market: string,
    price: string,
    volume: number
}

export interface Ticker<C, F> {
    base: C,
    target: F,
    price: string,
    volume: string,
    change: string
}

export interface Response {
    ticker: ExtendedTicker,
    timestamp: number,
    success: boolean,
    error: string
}

export interface ExtendedTicker extends Ticker<CryptoPairs, FIATPairs> {
    markets?: Markets[]
}