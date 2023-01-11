import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `*—◉ EXMPLE:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳YOUR AUDIO IS PROCESSING...⏳_*`, m)  
let json = await res.json()
let aa = conn.sendMessage(m.chat, { audio: { url: json.result.audio }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
if (!aa) return conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳YOUR VIDEO IS PROCESSING...⏳_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝐀𝐬𝐢𝐟 𝐊𝐢𝐧𝐠_`, m)}
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR TRY AGAIN*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
