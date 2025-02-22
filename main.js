const TelegramBot = require('node-telegram-bot-api');

const token = '7917195254:AAGQzoiOrfGwY9mliUrXuCcrqrt4bjrGwHQ';
const bot = new TelegramBot(token, {polling:true});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Здравствуйте, ${msg.from.first_name} ${msg.from.last_name}!\nДля начала работы <b>подтвердите, что вы ученик 7-М класса</b>.\n\nВопрос:\n<i><b>Назовите полное ФИО первого учителя русского языка в классе.</b></i>`, {parse_mode:'HTML'});

    bot.on('message', (msg) => {
        if (msg.text === "") 
    });
});

console.log('> Successful start');