import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${usedPrefix + command} beret ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json
let letratexto =`*🌹TITLE*: *${result.title}*\n*👑AUTHOR*: *${result.author}*\n\n⚡*Later*: ${result.lyrics}`.trim()
let linkresult = monospace + result.link + monospace
conn.sendButton(m.chat, letratexto, `\n*🍈Url*: ${linkresult}\n${wm}`, json.thumbnail.genius, [['🎵 Download Audio  🎵', `#play.1 ${text}`], ['🎥 Download Video 🎥', `#play.2 ${text}`]], m)
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] Error.......😢*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
