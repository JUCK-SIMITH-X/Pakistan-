const fs = require("fs");
module.exports.config = {
  name: "Luccha",
  version: "1.0.0", 
  permission: 0,
  credits: "SM HRIDOY",
  description: "", 
  premium: false,
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 

};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cup")==0 || event.body.indexOf("Cup")==0 ||
event.body.indexOf("🥵")==0 ||
event.body.indexOf("চুপ")==0 || event.body.indexOf("chup")==0 || event.body.indexOf("Chup")==0) {
		var msg = {
				body: "╭──────•◈•───────╮ \nলুঁচ্চা্ঁ পো্ঁলা্ঁপা্ঁন্ঁ এ্ঁখা্ঁনে্ঁ এ্ঁসে্ঁ /nচুঁম্মা্ঁচা্ঁটি্ঁ না্ঁ ক্ঁরে্ঁ পা্ঁট্ঁ খে্ঁতে্ঁ যা্ঁই্ঁয়া্ঁ ক্ঁর্ঁ 🥵",\n╰──────•◈•───────╯",
				attachment: fs.createReadStream(__dirname + `/S.M.Hridoy/lucchapolapan.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
