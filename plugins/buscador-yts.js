import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, text }) => {
if (!text) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ πΎ π²π°π½π°π» π³π΄ ππΎππππ±π΄*'
try {
let imagennnnn = (await youtubeSearch(text)).video[0].thumbnail
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
π *${v.title}* (${v.url})
β π³πππ°ππΈπΎπ½: ${v.durationH}
β²οΈ πΏππ±π»πΈππ·π΄π³: ${v.publishedTime}
ποΈ ${v.view} ππΈπ΄π
`.trim()
case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} πππ±ππ²ππΈπ±π΄ππ_
π₯ ${v.videoCount} ππππππ
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
await conn.sendMessage(m.chat, { image: { url: imagennnnn }, caption: teks }, { quoted: m })  
} catch {
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result
let ini_txt = ""
for (var x of get_result2) {
ini_txt += `π *${x.title}* (https://www.youtube.com/watch?v=${x.videoId})\n`
ini_txt += `ποΈ πππ΄ππ: ${x.views}\n`
ini_txt += `β²οΈ πΏππ±π»πΈππ·π΄π³: ${x.published}`
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
