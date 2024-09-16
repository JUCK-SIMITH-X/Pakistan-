const fs = require("fs");
module.exports = {
  config:{
	name: "npx4",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🥵")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "লুঁচ্চা্ঁ পো্ঁলা্ঁপা্ঁন্ঁ এ্ঁখা্ঁনে্ঁ এ্ঁসে্ঁ চুঁম্মা্ঁচা্ঁটি্ঁ না্ঁ ক্ঁরে্ঁ পা্ঁট্ঁ খে্ঁতে্ঁ যা্ঁই্ঁয়া্ঁ ক্ঁর্ঁ 🥵",
				attachment: fs.createReadStream(__dirname + `/SM.Hridoy/luccha.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
