import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*'
try {
let imagennnnn = (await youtubeSearch(text)).video[0].thumbnail
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
📌 *${v.title}* (${v.url})
⌚ 𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽: ${v.durationH}
⏲️ 𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳: ${v.publishedTime}
👁️ ${v.view} 𝚅𝙸𝙴𝚆
`.trim()
case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴𝚁𝚂_
🎥 ${v.videoCount} 𝚟𝚒𝚍𝚎𝚘𝚜
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
await conn.sendMessage(m.chat, { image: { url: imagennnnn }, caption: teks }, { quoted: m })  
} catch {
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result
let ini_txt = ""
for (var x of get_result2) {
ini_txt += `📌 *${x.title}* (https://www.youtube.com/watch?v=${x.videoId})\n`
ini_txt += `👁️ 𝚅𝚒𝙴𝚆𝚂: ${x.views}\n`
ini_txt += `⏲️ 𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳: ${x.published}`
ini_txt += `\n\n========================\n\n`
}
await conn.sendMessage(m.chat, { image: { url: get_result2[0].thumbnail }, caption: ini_txt }, { quoted: m })  
}}   
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
