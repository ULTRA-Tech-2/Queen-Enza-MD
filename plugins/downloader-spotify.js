import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTER THE NAME OF SOME SONG TO SEARCH*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `❒═════❬ 𝚂𝙿𝙾𝚃𝙸𝙵𝚈 ❭═════╾❒\n┬\n├‣✨ *𝚃𝙸𝚃𝙻𝙴:* ${title}\n┴\n┬\n├‣🗣️ *𝙰𝚁𝚃𝙸𝚂𝚃:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *𝚄𝚁𝙻 𝙾𝙵 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳:* ${json2.result.link}\n┴`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁*'
}}
handler.command = /^(spotify|music)$/i
export default handler
