const config = require("../alertbot/configs/config")

// FIXME, add some input validation here

module.exports = {
  handleMessage(req, data, bot) {
    console.log("Handling alert");
    bot.onAlert(data.text);
  }
};
