const axios = require('axios');

const config = {
  name: "imgur",
  aliases: ["upload", "image"],
  version: "1.0.0",
  author: "Starboy Mostakim",
  role: 0,
  category: "Image Processing",
  shortDescription: {
    en: "Upload images to Imgur",
    vi: "Tải lên hình ảnh lên Imgur"
  },
  longDescription: {
    en: "This command allows users to upload images to Imgur.",
    vi: "Lệnh này cho phép người dùng tải lên hình ảnh lên Imgur."
  },
  guide: {
    en: "Simply provide the image link to upload it to Imgur.",
    vi: "Chỉ cần cung cấp liên kết hình ảnh để tải lên Imgur."
  }
};

// Function to handle command execution
async function onStart({ args, message, event, api, commandName }) {
  const imageUrl = args[0];

  if (imageUrl) {
    // Imgur Client ID (you need to replace this with your own)
    const clientId = 'your_imgur_client_id';

    try {
      message.reply("Processing the image link...");

      // Making a request to Imgur API to upload the image
      const response = await axios.post('https://api.imgur.com/3/image', {
        image: imageUrl,
        type: 'url'
      }, {
        headers: {
          Authorization: `Client-ID ${clientId}`
        }
      });

      if (response.data.success) {
        message.reply(`Image uploaded successfully! View it here: ${response.data.data.link}`);
      } else {
        message.reply("Failed to upload image to Imgur.");
      }
    } catch (error) {
      console.error("Error uploading image to Imgur:", error);
      message.reply("An error occurred while uploading the image. Please try again.");
    }
  } else {
    message.reply("Please provide a valid image link to upload.");
  }
}

// Export module
module.exports = { config, onStart };
