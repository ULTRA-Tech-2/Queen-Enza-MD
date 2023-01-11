import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] *—◉ EXMPLE:*\n*${usedPrefix + command} Fake-Love*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: '🎵 AUDIO 🎵' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: '🎥 VIDEO 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 LIST 📋' }, type: 1 }, ]    
let texto1 = `*◉—⌈ 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙿𝙻𝙰𝚈 ⌋—◉*\n
❏ 💙 *𝚃𝙸𝚃𝙻𝙴:* ${title}
❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳:* ${publishedTime}
❏ ⏲️ *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${durationH}
❏ 👀 *𝚅𝙸𝙴𝚆𝚂:* ${viewH}
❏ 📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽:* ${description}
❏ 🔗 *𝙻𝙸𝙽𝙺:* ${urll}`.trim()
let buttonMessage = { "document": { url: "https://wa.me/923474187615" }, "fileName": '❏ 👑 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙿𝙻𝙰𝚈𝙴𝚁', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://wa.me/923474187615` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `❏ 🏵️ *𝚃𝙸𝚃𝙻𝙴:* ${title}\n❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳:* ${published}\n❏ 👀 *𝚅𝙸𝙴𝚆𝚂:* ${views}\n❏ 🔗 *𝙻𝙸𝙽𝙺:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝐑𝐄𝐒𝐔𝐋𝐓 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*SENDING AUDIO, PLEASE WAIT A MOMENT...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*ERROR PLEASE TRY AGAIN*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
