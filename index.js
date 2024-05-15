import TelegramBot from "node-telegram-bot-api";

const token = "6672419094:AAG1kaXgom649ZCvja8eIEEpSoGTJIq4HtA";

const bot = new TelegramBot(token, { polling: true });

const keyboard = [["Команда 1", "Команда 2"], ["Другая команда"]];

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Привет Выберите одну из команд:", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Главная",
            web_app: { 
                url: "https://mystepfather.github.io/TelegramApp/" 
            },
          },
        ],
        [
          {
            text: "Опоздун",
            web_app: {
              url: "https://mystepfather.github.io/TelegramApp/opozdun",
            },
          },
        ],
      ],
    },
  });
});