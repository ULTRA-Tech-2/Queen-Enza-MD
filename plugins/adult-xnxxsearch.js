import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*#enable modohorny*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EXMPLE ${usedPrefix + command} Con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `𝗩𝗶𝗱𝗲𝗼: ${args.join(" ")}`
const sections = [{
title: `HEHEHE`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'HOT HOT MAAL',
title: " 『 𝗩𝗜𝗗𝗘𝗢𝗦』",
buttonText: "[♦ 𝐑𝐄𝐒𝐔𝐋𝐓 ♦]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: '⇧ COPY LINK AND DOWNLOAD ⇧', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler
