let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '*[ ⚠️ 𝗔𝗟𝗘𝗥𝗧 ⚠️ ] 𝗟𝗜𝗡𝗞.....?*'
if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*THE BOT IS SUCCESSFUL TO THE GROUP, ENJOY THE BOT! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*NEW BOT REQUEST FOR A GROUP [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ NUMBER:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ LINK OF THE GROUP WHERE THE BOT IS REQUESTED:* ' + link, jid)
await m.reply('*THE LINK OF YOUR GROUP WAS SENT TO MY OWNER*\n\n*👉🏻 YOUR GROUP WILL BE UNDER EVALUATION AND THE OWNER OF THE BOT WILL DECIDE WHETHER TO ADD ME OR NOT*\n\n* SOME OF THE REASONS WHY WHICH YOUR REQUEST MAY BE REJECTED ARE:*\n.- THE BOT IS OVERLOADED*\n*2.- THE BOT WAS PREVIOUSLY DELETED FROM THE GROUP*\n*3.- THE GROUP LINK WAS RESETTED*\n*4. - THE BOT IS NOT ADDED TO GROUPS BY DECISION OF THE OWNER *\n\n*👉🏻 NOTE THAT YOUR REQUEST TO JOIN THE BOT TO A GROUP MAY TAKE HOURS OR DAYS TO BE ANSWERED, BE PATIENT*')
}
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝗘𝗥𝗥𝗢𝗥.....😏*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
export default handler
