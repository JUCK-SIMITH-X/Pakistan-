/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "hot",
  version: "1.0.0",
  permission: 0,
  credits: "SIDDIK",
  description: "HOT VEDIO",
  prefix: true, 
  category: "Hình ảnh", 
  usages: "hot vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
 
module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["-𝐂𝐑𝐄𝐀𝐓𝐄 𝐁𝐘 𝐒.𝐌 𝐇𝐑𝐈𝐃𝐎𝐘-🔥"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
 
   "https://i.imgur.com/T7lKhrt.mp4",
    "https://i.imgur.com/awujJ2j.mp4",
    "https://i.imgur.com/DxHpRYn.mp4",
    "https://i.imgur.com/KivJto7.mp4",
    "https://i.imgur.com/bQAdKat.mp4",
    "https://i.imgur.com/SLHrTpL.mp4",
 
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
