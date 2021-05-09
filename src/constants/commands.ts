import { BotCommand } from "node-telegram-bot-api";

export const commands: BotCommand[] = [
    {command: "/help", description: "Basic guide how to use the bot"},
    {command: "/rates", description: "Get crypto ticker to USD pair"},
    {command: "/supported_fiat", description: "A list of supported FIAT pairs"},
]