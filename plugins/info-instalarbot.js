import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `

*ββ π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ*
> cd && termux-setup-storage
> apt-get update -y && apt-get upgrade -y
> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
> cd /sdcard/cd filename
> yarn install 
> npm install
> npm update
> npm install 
> npm start` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'Η«α΄α΄α΄Ι΄-α΄Ι΄α΄’α΄ - Κα΄α΄', body: null, thumbnail: imagen1, sourceUrl: 'https://wa.me/+923474187615' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
