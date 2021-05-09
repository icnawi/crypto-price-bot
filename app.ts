import { Message } from "node-telegram-bot-api";
import { config } from "dotenv";
import fetch from "node-fetch";

import { getRatesByDefaultFIAT } from './src/api/index';
import { bot } from "./src/bot";
import { commands } from "./src/constants/commands";


config();

bot.setMyCommands(commands)

bot.onText(/\/help/, (msg: Message) => {
    const { id } = msg.chat;
    const formattedMessage = `
    /rates - Enter crypto symbol to a latest ticker on it.
    /supportedFiat - Find which currencies are supported
    `
    
    bot.sendMessage(id, formattedMessage);
});

bot.onText(/\/rates/, (msg: Message) => {
    const { id } = msg.chat;
    
    bot.sendMessage(id, "Enter a coin name");
    bot.on("message", async (mssg: Message) => {
        const url = getRatesByDefaultFIAT()[(mssg.text!).toUpperCase()];
        try {
            const coinData = await fetch(url).then(response => response.json());
            const { symbol, last_trade_price } = coinData;
            const formattedMessage = !coinData.error 
                ? `${symbol} = $${last_trade_price}`
                : `Current symbol is not supported`;
            bot.sendMessage(id, formattedMessage)
        } catch (e) {
            console.error(e);
            bot.sendMessage(id, e.message)
        }
    })

});

bot.onText(/\/supported_fiat/, (msg: Message) => {
    const { id } = msg.chat;

    const formattedMessage = `
    Currently supported FIAT currency:
    1) US Dollar - USD,
    2) Euro - EUR,
    3) Russian Ruble - RUB,
    4) Ukrainian Hryvnya - UAH
    `

    bot.sendMessage(id, formattedMessage);
});