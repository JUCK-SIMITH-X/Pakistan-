/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "minar",
  version: "1.0.0",
  permssion: 0,
  credits: "SM HRIDOY",
  prefix:true,
  description: "minar video",
  category: "user",
  usages: "minar",
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
   var hi = ["「 💙•༎♡༎•💙──🦋ლ-ლ 𝘿𝙤𝙣,𝙩..𝙩𝙧𝙪𝙨𝙩 𝙢𝙚 𝙢𝙮 𝙨𝙢𝙞𝙡𝙚 \nঅনেক কষ্ট নিয়েও হাসতে পারি..!!🙂💔🥀\n💙•༎「-𝙲𝚁𝙴𝙰𝚃𝙴 𝚂.𝙼 𝙷𝚁𝙸𝙳𝙾𝚈-"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/j5ovJxZ.mp4",
"https://i.imgur.com/3GOiESB.mp4",
"https://i.imgur.com/Deqddju.mp4",
"https://i.imgur.com/IljgPFD.mp4",
"https://i.imgur.com/L4V046I.mp4",
"https://i.imgur.com/jO4bMbO.mp4",
"https://i.imgur.com/zAZxJX6.mp4",
"https://i.imgur.com/ElU0plW.mp4",
];
     var callback = () => api.sendMessage({body:`${know}`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
