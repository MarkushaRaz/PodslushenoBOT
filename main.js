const TelegramBot = require('node-telegram-bot-api');

const token = '7917195254:AAGQzoiOrfGwY9mliUrXuCcrqrt4bjrGwHQ';
const bot = new TelegramBot(token, {polling:true});

let TimeData;

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Здравствуйте, ${msg.from.first_name} ${msg.from.last_name}!\nДля начала работы <b>подтвердите, что вы ученик 7-М класса</b>.\n\nВопрос:\n<i><b>Назовите имя и отчество первого учителя русского языка в классе.</b></i>`, {parse_mode:'HTML'});

    bot.on('message', (msg) => {
        if (msg.text === "Зера Леноровна") {
            bot.sendMessage(msg.chat.id, '<b>Верно!</b>', {parse_mode:'HTML'})
                .then((sentMessage) => TimeData = sentMessage.message_id);
        }
        else {
            bot.sendMessage(msg.chat.id, '<b>Вы не ученик 7-М класса!</b>', {parse_mode:'HTML'});
            return;
        }
    });
});

console.log('> Successful start');