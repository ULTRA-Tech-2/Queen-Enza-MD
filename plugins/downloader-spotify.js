import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[βππππβ] ENTER THE NAME OF SOME SONG TO SEARCH*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `βββββββ¬ ππΏπΎππΈπ΅π β­ββββββΎβ\nβ¬\nββ£β¨ *ππΈππ»π΄:* ${title}\nβ΄\nβ¬\nββ£π£οΈ *π°πππΈππ:* ${artists}\nβ΄\nβ¬\nββ£π *πππ»*: ${link}\nβ΄\nβ¬\nββ£π *πππ» πΎπ΅ π³πΎππ½π»πΎπ°π³:* ${json2.result.link}\nβ΄`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '*[βππππβ] π΄πππΎπ*'
}}
handler.command = /^(spotify|music)$/i
export default handler
