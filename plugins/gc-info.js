let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*γ ππ₯π’π¨π£ ππ‘ππ’π₯π ππ§ππ’π‘ γ*\n
*πΆππΎππΏ πΈπ³π΄π½ππΈπ΅πΈπ²π°ππΈπΎπ½:* 
${groupMetadata.id}

*π½π°πΌπ΄:* 
${groupMetadata.subject}

*π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* 
${groupMetadata.desc?.toString() || 'π½πΎ π³π΄ππ²ππΈπΏππΈπΎπ½'}

*ππΎππ°π»  πΏπ°πππΈπ²πΈπΏπ°π½ππ΄π:*
${participants.length} Participantes

*π²ππ΄π°ππΎπ:* 
@${owner.split('@')[0]}

*π°π³πΌπΈπ½π:*
${listAdmin}

*AUTOMATIC OPTIONS:*
ββ ππ΄π»π²πΎπΌπ΄: ${welcome ? 'β' : 'β'}
ββ π³π΄ππ΄π²π: ${detect ? 'β' : 'β'} 
ββ π°π½ππΈπ»πΈπ½πΊ: ${antiLink ? 'β' : 'β'} 
ββ π°π½ππΈπ»πΈπ½πΊ πΈ: ${antiLink2 ? 'β' : 'β'} 
ββ πΌπΎπ³πΎ π·πΎππ½π: ${modohorny ? 'β' : 'β'} 
ββ π°πππΎπππΈπ²πΊπ΄π: ${autosticker ? 'β' : 'β'} 
ββ π°ππ³πΈπΎπ: ${audios ? 'β' : 'β'} 
ββ π°π½ππΈππΈπ΄ππΎπ½π²π΄: ${antiviewonce ? 'β' : 'β'} 
ββ π°π½ππΈππΎππΈπ²: ${antiToxic ? 'β' : 'β'} 
ββ π°π½ππΈπππ°π±π°: ${antiTraba ? 'β' : 'β'} 
ββ πΌπΎπ³π°π³πΌπΈπ½: ${modoadmin ? 'β' : 'β'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
