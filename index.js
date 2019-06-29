const TelegramBot = require ('node-telegram-bot-api')
const TOKEN = '873463932:AAFcY0MyS7qqcJvqmzruehGF2K-OHdyZQL4'

const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

bot.on ('message', msg => {
    if (msg.text.toLowerCase() === '/start') {
        bot.sendMessage(msg.chat.id, 'Приветствую! Поздравляю Вас с принятием отличного решения!) Всего будет 6 вопросов. Это не займет много Вашего времени! Но поможет вам сделать свой выбор! Нажмите "Далее", чтобы узнать первый вопрос. ', {
            reply_markup: {
                keyboard: [
                    ['Далее'],
                ]
            }
        })
    } else if (msg.text === 'Далее') {
        bot.sendMessage(msg.chat.id, 'Итак, Вопрос 1. Хотите ли Вы работать удаленно?', {
            reply_markup: {
                keyboard: [
                    ['Очень хочу!', 'Не хочу!',]
                ]
            }
        })
    } else if (msg.text === 'Очень хочу!') {
        bot.sendMessage(msg.chat.id, 'Прекрасный выбор) Отлично, давайте продолжим. Вопрос 2. Сколько времени в день Вы хотите работать?', {
            reply_markup: {
                keyboard: [
                    ['2-3 часа', '9 часов',],
                    ['А что ещё работать нужно?']
                ]
            }
        })
    } else if (msg.text === 'Не  хочу!') {
        bot.sendMessage(msg.chat.id, 'Понимаю Ваш выбор) Ну что ж, давайте продолжим. Вопрос 2. Сколько времени в день Вы хотите работать?', {
            reply_markup: {
                keyboard: [
                    ['2-3 часа', '9 часов',],
                    ['А что ещё работать нужно?']
                ]
            }
        })
    } else if (msg.text === '2-3 часа') {
        bot.sendMessage(msg.chat.id, 'Очень интересно!) Я уже вижу Ваш потенциал! Давайте дальше. Воспрос 3. Как Вы хотели бы прости лето?', {
            reply_markup: {
                keyboard: [
                    ['Дома', 'Путешествуя',]
                ]
            }
        })
    } else if (msg.text === '9 часов') {
        bot.sendMessage(msg.chat.id, 'Вы серьёзно? Вам нужно больше отдыхать!) Давайте дальше. Воспрос 3. Как Вы хотели бы прости лето?', {
            reply_markup: {
                keyboard: [
                    ['Дома', 'Путешествуя',]
                ]
            }
        })
    } else if (msg.text === 'А что ещё работать нужно?') {
        bot.sendMessage(msg.chat.id, 'Ну Вы и пошутили!)) Давайте дальше. Воспрос 3. Как Вы хотели бы прости лето?', {
            reply_markup: {
                keyboard: [
                    ['Дома', 'Путешествуя',]
                ]
            }
        })
    } else if (msg.text === 'Дома') {
        bot.sendMessage(msg.chat.id, 'Точно дома? Не скучно будет?) Ну как скажете. Тогда следующий Вопрос 4. Сколько времени в день Вы тратите на листание ленты Instagram?', {
            reply_markup: {
                keyboard: [
                    ['Меньше часа', '2-3 часа',],
                    ['Целый день там сижу',]
                ]
            }
        })
    } else if (msg.text === 'Путешествуя') {
        bot.sendMessage(msg.chat.id, 'Прекрасно!) Отличный выбор! Давайте следующий Вопрос 4. Сколько времени в день Вы тратите на листание ленты Instagram?', {
            reply_markup: {
                keyboard: [
                    ['Меньше часа', '2-3 часа',],
                    ['Целый день там сижу',]
                ]
            }
        })
    } else if (msg.text === 'Целый день там сижу') {
        bot.sendMessage(msg.chat.id, 'Вам срочно нужна наша помощь!!! Напишите менеджеру!', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text : 'Менеджер Анастасия',
                            url: 'http://t.me/a_kraytor'
                        }
                    ]]
            }
        })
    }


});