const config = require("../alertbot/configs/config")

module.exports = {
  handleMessage(req, data, bot) {
    console.log("Handling alert");
    bot.onAlert(data.text);
  }
};
