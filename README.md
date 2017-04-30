# Doraemon for Wire™

This is a chat bot for [Wire™](https://wire.com) chat app, developed in Node.JS on top of [Wire Bot Node SDK](https://github.com/wireapp/bot-sdk-node)

This has some proof of concept implementation for Gitlab push hooks, i.e. send you a chat message when somebody pushed to your repo

This contains the SDK files as well, and please refer to the [Wire Bot Node SDK](https://github.com/wireapp/bot-sdk-node) page for installation as well as cert generation instructions.

Add a doraemon/configs/config.js file (.gitignored in this repo) that looks like this

```
const path = require('path');

module.exports = {
  getBotOptions() {
    return {
      port: 8050,
      key: path.join(__dirname, 'server.key'),
      cert: path.join(__dirname, 'server.crt'),
      storePath: path.join(__dirname, 'store'),
      auth: 'YOUR_AUTH_TOKEN_FROM_DEVBOT',
    }
  },
};
```
