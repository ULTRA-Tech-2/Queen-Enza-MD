import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*ββββ° ππ‘π­π β±βββ*\n*β*\n*β β§* ${text}\n*β*\n*ββββββββββββββββ*`, 'ππ¦ππ π’ππ ππ’π₯πππππ¦π§\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π€ πΎππ½π΄π π€', '.owner'],['π π³πΎπ½π°π π', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ππππ₯π§-ππππππ₯',
body: 'ΚΚ Η«α΄α΄α΄Ι΄ α΄Ι΄α΄’α΄ οΉ£ Κα΄α΄', 
sourceUrl: `https://wa.me/923474187615`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[βππππβ] πΌπ΄π½ππ°πΉπ΄ π΄π½ππΈπ°π³πΎ π° ${groups.length} πΆπππΏπΎ/π*\n\n*ππππ: π΄π πΏπΎππΈπ±π»π΄ πππ΄ ππ΄π½πΆπ° π΅π°π»π»πΎπ π΄πππ΄ π²πΎπΌπ°π½π³πΎ π π½πΎ ππ΄ π΄π½ππΈπ΄ π° ππΎπ³πΎπ π»πΎπ π²π·π°ππ, π³πΈππ²ππ»πΏπ΄ πΏπΎπ π΄π» πΌπΎπΌπ΄π½ππΎ*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
