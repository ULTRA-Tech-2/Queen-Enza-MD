import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*#enable modohorny*'
if (!text) throw `*[βππππβ] EXMPLE ${usedPrefix + command} Con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `π©πΆπ±π²πΌ: ${args.join(" ")}`
const sections = [{
title: `HEHEHE`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'HOT HOT MAAL',
title: " γ π©ππππ’π¦γ",
buttonText: "[β¦ ππππππ β¦]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: 'β§ COPY LINK AND DOWNLOAD β§', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[βππππβ] ERROR*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler
