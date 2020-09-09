const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag}がオンラインになりました`);
});
//誰も書いてなくて草
//誰も何もしないww
client.login('Token');
