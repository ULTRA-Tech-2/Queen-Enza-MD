import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[βππππβ] π΄πΉπ΄πΌπΏπ»πΎ π³π΄ πππΎ π²πΎπππ΄π²ππΎ π³π΄π» π²πΎπΌπ°π½π³πΎ: ${usedPrefix + command} beret ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json
let letratexto =`*πΉTITLE*: *${result.title}*\n*πAUTHOR*: *${result.author}*\n\nβ‘*Later*: ${result.lyrics}`.trim()
let linkresult = monospace + result.link + monospace
conn.sendButton(m.chat, letratexto, `\n*πUrl*: ${linkresult}\n${wm}`, json.thumbnail.genius, [['π΅ Download Audio  π΅', `#play.1 ${text}`], ['π₯ Download Video π₯', `#play.2 ${text}`]], m)
} catch {
await m.reply('*[βππππβ] Error.......π’*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
