import fetch from 'node-fetch'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] *—◉ 𝙴𝚇𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝚂 𝙸𝙽𝚅𝙰𝙸𝙻𝙳*\n\n*—◉ 𝙴𝚇𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*[❗] @${m.sender.split`@`[0]} WAIT A MOMENT UNTIL I SEND YOUR TIKTOK VIDEO*`
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender]}}}, aa)
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '𝙰𝚄𝙳𝙸𝙾' }, buttonId: `${usedPrefix}tomp3` }]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
conn.sendMessage(m.chat, { video: { url: url}, caption: '_ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ_', footer: await shortUrl, buttons }, { quoted: m })
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] SORRY, AN ERROR OCCURRED DOWNLOADING YOUR VIDEO, PLEASE TRY AGAIN*')  
}}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler
