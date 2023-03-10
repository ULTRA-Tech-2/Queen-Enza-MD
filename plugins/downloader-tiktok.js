import fetch from 'node-fetch'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!text) throw `*[βππππβ] *ββ π΄ππΌπΏπ»π΄:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[βππππβ] π»πΈπ½πΊ πΈπ πΈπ½ππ°πΈπ»π³*\n\n*ββ π΄ππΌπΏπ»π΄:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*[β] @${m.sender.split`@`[0]} WAIT A MOMENT UNTIL I SEND YOUR TIKTOK VIDEO*`
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'α΄Κα΄ α΄Κsα΄Ιͺα΄ - Κα΄α΄', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender]}}}, aa)
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: 'π°ππ³πΈπΎ' }, buttonId: `${usedPrefix}tomp3` }]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
conn.sendMessage(m.chat, { video: { url: url}, caption: '_α΄Κα΄ α΄Κsα΄Ιͺα΄ οΉ£ Κα΄α΄_', footer: await shortUrl, buttons }, { quoted: m })
} catch {
await m.reply('*[βππππβ] SORRY, AN ERROR OCCURRED DOWNLOADING YOUR VIDEO, PLEASE TRY AGAIN*')  
}}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler
