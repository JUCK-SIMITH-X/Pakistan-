const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "SM Hridoy", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("💔")==0 || body.indexOf("💔")==0 || body.indexOf(" ")==0) {
		var msg = {
				body:"জা্ঁনে্ঁ মা্ঁন্ঁ তো্ঁমা্ঁর্ঁ কি্ঁ ব্রে্ঁকা্ঁপ্ঁ হ্ঁইঁছেঁ 🫠😶",
				attachment: fs.createReadStream(__dirname + `/SM.Hridoy/Jane man tomar ki brekap.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😰", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
                      }
