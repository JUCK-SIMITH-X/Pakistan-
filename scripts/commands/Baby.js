module.exports.config = {
  name: "babu",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Islamick Cyber Chat",
  description: "fun",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["\n- হুম বাবু বলো-!!😘😊","\n অহ আমার বাবু টা আমাকে না ডেকে-আমার বস SM Hridoy কে ডাকো!!😍❤️","\n\n- বাবু এতো ডাকো আদর দিবা!!✨🤍🤭","\nএতো বাবু বাবু করলে কোলে উঠে হিসু করে দিবো!!🙈😽","\n আমাকে বাবু না বলে এস এম হৃদয় কে বাবু বলো\n তুমার সাথে আরি-!!😌😾","\n\nকার দেওয়া ফুল খোঁপার চুলে\n তুমার ওই মুখে আমার নাম নিবা না আর অন্য মেয়েদের ডাকো গা যাও-!!😭😈","\nতুমি আর আমার সাথে কথা বলবা না।\n তুমি কাল পাসের বাড়ির ভাবির সাথে কি করসো-!!🤬😤","\n আমাকে আর বাবু ডাকবে না..!😾\nতুমার আব্বুর কাছে নালিশ দিবো আমি..!😤\n তুমি ভাবি দের সাথে খারাপ কাজ করো তুমি লুচ্চা-!!😈😭","\nকোন সাহ্যসে তুমি আমাকে ডাকো তুমি একটা লুচ্চা-!!😈","\n অলে বাবু টা লে আমার__😘😍\n কি হয়েছে সোনা তুমার-!!😔\n ডাকলে যে...??","\n - হুম বাবু পরে কথা হবে এখন রাখি-!!😘😍🥹","\nবাবু শোনোনা থাক তুমি তো কানা","\n - হুম বাবু আর একটা প্রেম করবো /nতোমার সাথে পড়ে কথা বলি-!!😊😔",];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`${name}\n ${rand}`, event.threadID, event.messageID);
    const res = await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${prompt}`);
    const respond = res.data.reply;
    return api.sendMessage( respond, event.threadID, event.messageID);
};
