import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] *ββ EXMPLE:*\n*${usedPrefix + command} Fake-Love*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: 'π΅ AUDIO π΅' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: 'π₯ VIDEO π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π LIST π' }, type: 1 }, ]    
let texto1 = `*βββ ππΎππππ±π΄ πΏπ»π°π βββ*\n
β π *ππΈππ»π΄:* ${title}
β π *πΏππ±π»πΈππ·π΄π³:* ${publishedTime}
β β²οΈ *π³πππ°ππΈπΎπ½:* ${durationH}
β π *ππΈπ΄ππ:* ${viewH}
β π *π³π΄ππ²ππΈπΏππΈπΎπ½:* ${description}
β π *π»πΈπ½πΊ:* ${urll}`.trim()
let buttonMessage = { "document": { url: "https://wa.me/923474187615" }, "fileName": 'β π ππΎππππ±π΄ πΏπ»π°ππ΄π', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://wa.me/923474187615` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `β π΅οΈ *ππΈππ»π΄:* ${title}\nβ π *πΏππ±π»πΈππ·π΄π³:* ${published}\nβ π *ππΈπ΄ππ:* ${views}\nβ π *π»πΈπ½πΊ:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'π ππππππ π'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*SENDING AUDIO, PLEASE WAIT A MOMENT...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*ERROR PLEASE TRY AGAIN*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
