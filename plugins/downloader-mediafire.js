import { mediafiredl } from '@bochilteam/scraper'
import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] EXMPLE: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*`
try {
let json = await mediafireDl2(args[0])
let caption = `
*π π½π°πΌπ΄:* ${json[0].nama.replace('+', ' ')}
*π ππΈππ΄:* ${json[0].size}
*π πππΏπ΄:* ${json[0].mime.toUpperCase()}

*β³ π΄ππΏπ΄ππ΄ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ π°ππ²π·πΈππΎ. . . .* 
`.trim()   
conn.sendMessage(m.chat, { text: caption, footer: wm }, { quoted: m })
conn.sendMessage(m.chat, { document : { url: json[0].link }, fileName : json[0].nama.replace('+', ' '), mimetype: json[0].mime.toUpperCase() }, { quoted: m })
} catch {  
try {  
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = await res
let caption = `
*π π½π°πΌπ΄:* ${filename}
*π ππΈππ΄:* ${filesizeH}
*π πππΏπ΄:* ${ext}

*β³ WAIT UNTIL I SEND YOUR FILE. . . .* 
`.trim()
let msg = m.reply(caption)
if (!msg || msg == '') return m.reply(global.wait)
let res2 = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkeysapi}&url=${args[0]}`)
let res3 = await res2.json()
let res4 = await res3.result.link  
if (!url || url == '') url = res4
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch {  
await m.reply('*[βππππβ] ERROR.........π*')
}}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
async function mediafireDl2(url) {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '')
const seplit = link.split('/')
const nama = seplit[5]
let mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil }     
