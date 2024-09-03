/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/

module.exports.config = {

	name: "sad",

version: "1.0.0",

permission: 0,

credits: "Nazrul",

description: "SAD VIDEO",

prefix: true, 

category: "Hình ảnh", 

usages: "sad vedio",

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

var hi = ["-SK-SIDDIK-KHAN--🌺"];

var know = hi[Math.floor(Math.random() * hi.length)];

var link = [
 
"https://i.imgur.com/CVMdz4a.mp4",
"https://i.imgur.com/ROJ2UNW.mp4",
"https://i.imgur.com/hWjBKcZ.mp4",
"https://i.imgur.com/pB4DD0P.mp4",
"https://i.imgur.com/vjUZa5O.mp4",
"https://i.imgur.com/hFbN9SX.mp4",
"https://i.imgur.com/Mapq0Rl.mp4",
"https://i.imgur.com/2p22JZ8.mp4",
"https://i.imgur.com/85dbHfc.mp4",
"https://i.imgur.com/ovpIW4x.mp4",
"https://i.imgur.com/H87vWpZ.mp4",
"https://i.imgur.com/XjfVz3N.mp4",
"https://i.imgur.com/IpsCwDW.mp4",
"https://i.imgur.com/rpGTQMo.mp4",
"https://i.imgur.com/oWjh2Bw.mp4",
"https://i.imgur.com/j0OnfpR.mp4",
"https://i.imgur.com/IShIp20.mp4",
];

var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4")); 

return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());

};
