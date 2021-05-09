import TelegramBot from 'node-telegram-bot-api';
import { config } from "dotenv";

config();

const token = process.env.TELEGRAM_BOT_TOKEN!;
const polling = true;
export const bot: TelegramBot = new TelegramBot(token, {polling});