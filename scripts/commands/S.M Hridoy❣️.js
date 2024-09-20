const fs = require("fs");
module.exports = {
  config:{
  name: "S.M Hridoy Ariyan",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "❣️",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Tomake valobasi")==0 || body.indexOf("oii")==0 || body.indexOf("❣️")==0 || body.indexOf("❣️")==0) {
    var msg = {
        body: "~ শুধু আমাকে ভালোবাসে হবে আমার বস SM HRIDOY কে একটু দাও..!✋🥀",
        attachment: fs.createReadStream(__dirname + `/S.M.Hridoy/voice.wav`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
