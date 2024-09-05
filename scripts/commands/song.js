/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "song",
  version: "1.0.0",
  permssion: 0,
  credits: "SM HRIDOY",
  prefix:true,
  description: "song video",
  category: "user",
  usages: "song",
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
   var hi = ["「 💙•༎♡༎•💙──🦋ლ-ლযদিও- জীবন থাকে নিংশ্বাসে/nতবুও ভালোবাসা বাঁচে বিশ্বাসে!!🙂💔🥀\n💙•༎「-𝙲𝚁𝙴𝙰𝚃𝙴 𝚂.𝙼 𝙷𝚁𝙸𝙳𝙾𝚈-"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/KzNkXl0.mp4",
"https://i.imgur.com/S566uly.mp4",
"https://i.imgur.com/9GO4NIO.mp4",
"https://i.imgur.com/OqV4cVh.mp4",
"https://i.imgur.com/Msu6BWV.mp4",
"https://i.imgur.com/Msu6BWV.mp4",
"https://i.imgur.com/t7QS381.mp4",
"https://i.imgur.com/8tRbBVe.mp4",
];
     var callback = () => api.sendMessage({body:`${know}`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
