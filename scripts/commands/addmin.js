module.exports.config = {
    name: "addmin",
    version: "1.0.0",
    permission: 0,
    credits: "nazrul",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/NoGWeZw.jpeg", 
            
            "https://i.imgur.com/NoGWeZw.jpeg", 
            
            "https://i.imgur.com/NoGWeZw.jpeg",
 
"https://i.imgur.com/12Zuk1o.jpeg",
            
            "https://i.imgur.com/12Zuk1o.jpeg"];
  
var callback = () => api.sendMessage({body:` 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡
=======================
𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${global.config.BOTNAME}
𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 :✢ 𝙎.𝙈-𝙃𝙍𝙄𝘿𝙊𝙔✢
𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝘽𝘼𝙍𝙄𝙎𝘼𝙇
=======𝗖𝗢𝗡𝗧𝗔𝗖𝗧=======
=======================
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/Hridoy.tera.bap.agaya
𝗧𝗔𝙇𝗘𝗚𝗥𝗔𝗠 𝗟𝗜𝗡𝗞:
https://t.me/smhridoy007
𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: ${global.config.PREFIX}
𝗕𝗢𝗧 𝗪𝗢𝗡𝗘𝗥: 𝙎.𝙈 𝙃𝙍𝙄𝘿𝙊𝙔 𝘼𝙍𝙄𝙔𝘼𝙉
𝗢𝗧𝗛𝗘𝗥 𝗡𝗘𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡 ==============================================
𝗧𝗢𝗗𝗬 𝗜𝗦 𝗧𝗜𝗠𝗘 : ${juswa} 
𝗕𝗢𝗧 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 ${hours}:${minutes}:${seconds}.
𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 ${global.config.BOTNAME} \n=======================
✢━━━━━ 𝐇𝐑𝐈𝐃𝐎𝐘 ━━━━━✢
 `,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
 
