/*
 * Alert Bot for Wire
 * Copyright (C) 2017 Wire Swiss GmbH, Jeremy Malcolm
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

const service = require('../lib/service');
const config = require('./configs/config')

var opts = config.getBotOptions();

// A bot which forward text alerts that it receives via JSON messages

service.createService(opts, (bot) => {
  console.log(`Bot instance created ${bot.botID}`);
  bot.on('message', (from, message) => {
    var msg = message.text.content;
    console.log(`Got message from ${from} text: ${msg}`);
    reply = "";
    if (msg.toLowerCase() == "help") {
      reply = "To receive alerts, you need to send using an HTTP POST request to ";
      reply += `https://${opts.domain}:${opts.port}/bots/${bot.botID}/alert in the following format:`;
      reply += "\n{\n  \"text\": \"Message\"\n}";
      reply += "\nTo enable or disable alerts, type \"enable alerts\" or \"disable alerts\".\n";
    }
    else if (msg.toLowerCase() == "disable alerts") {
      reply = `Alerts disabled.`;
      // FIXME: code this
    }
    else if (msg.toLowerCase() == "enable alerts") {
      reply = `Alerts enabled.`;
      // FIXME: code this
    }

    if (reply != "") {
      bot.sendMessage(reply, (sendStatus) => {
        console.log(`message successfully sent with status ${sendStatus}`);
      });
    }
  });
  bot.on('alert', (data) => {
    console.log("Got alert")
    bot.sendMessage(data, (sendStatus) => {
      console.log(`message successfully sent with status ${sendStatus}`);
    });
  });
  bot.on('join', (members, conversation) => {
    console.log(`New members ${members} joined conversation ${conversation.id}`);
  });
  bot.on('leave', (members, conversation) => {
    console.log(`Members ${members} have left conversation ${conversation.id}`);
  });
  bot.on('rename', (name, conversation) => {
    console.log(`Conversation ${conversation.id} renamed to ${name}`);
  });
});
