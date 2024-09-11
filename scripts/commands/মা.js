/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "মা",
  version: "1.0.0",
  permssion: 0,
  credits: "SM HRIDOY",
  prefix:true,
  description: "মা video",
  category: "user",
  usages: "মা",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
 
module.exports.run = async ({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["「 💙•༎♡༎•💙──🦋ლ-মা, যার কোনো বিকল্প নেই \nযার মা নেই পৃথিবীতে তার কিছুই নেই!🙂💔🥀\n💙•༎「-𝙲𝚁𝙴𝙰𝚃𝙴 𝚂.𝙼 𝙷𝚁𝙸𝙳𝙾𝚈-"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/8oa3g3f.mp4",
"https://i.imgur.com/06tQRlT.mp4",
"https://i.imgur.com/Nafw8g1.mp4",
"https://i.imgur.com/YWfWF50.mp4",
"https://i.imgur.com/C0kGqTm.mp4",
"https://i.imgur.com/AD6ksVS.mp4",
"https://i.imgur.com/f95XFCn.mp4",
"https://i.imgur.com/zz9ul7l.mp4",
];
     var callback = () => api.sendMessage({body:`${know}`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
