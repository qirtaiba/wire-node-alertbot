# Alertbot for Wire™

This is an alert bot for [Wire™](https://wire.com) chat app, developed in Node.JS on top of [Wire Bot Node SDK](https://github.com/wireapp/bot-sdk-node)

The bot will send you an alert when it receives a JSON-formatted message delivered to its endpoint. To get the URL of the endpoint and the format for the message, ask the bot for help.

This contains the SDK files as well, and please refer to the [Wire Bot Node SDK](https://github.com/wireapp/bot-sdk-node) page for installation as well as cert generation instructions.

Add an alertbot/configs/config.js file (.gitignored in this repo) that looks like this

```
const path = require('path');

module.exports = {
  getBotOptions() {
    return {
      domain: 'YOUR_FQDN_HERE',
      port: 8050,
      key: path.join(__dirname, 'server.key'),
      cert: path.join(__dirname, 'server.crt'),
      storePath: path.join(__dirname, 'store'),
      auth: 'YOUR_AUTH_TOKEN_FROM_DEVBOT',
    }
  },
};
```
