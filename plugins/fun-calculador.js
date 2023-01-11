let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTER THE @TAG OF SOME PARTICIPANT OF THE GROUP OR THE NAME OF THE PERSON*`
if (command == 'gay2') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN 🏳️‍🌈* *${(100).getRandom()}%* *GAY*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'lesbian') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN 🏳️‍🌈* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'fucker') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN 😏💦* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'nega') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN 😏💦* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'madarchod') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MORE INFORMATION TO YOUR PRIVATE 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'sisterfucker') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MORE INFORMATION TO YOUR PRIVATE 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'gandu') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'bondo') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'rat') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🐁 EAT CHEESE 🧀*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'randi') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, WHO WANTS YOUR SERVICES? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'bitch') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *EN* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, WHO WANTS YOUR SERVICES? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}         
}
handler.help = ['gay2', 'lesbian', 'fucker', 'nega', 'madarchod', 'sisterfucker', 'gandu', 'bondo', 'rat', 'bitch', 'randi'].map(v => v + ' @tag | name')
handler.tags = ['calculator']
handler.command = /^gay2|lesbian|fucker|nega|madarchod|sisterfucker|gandu|bondo|rat|bitch|randi/i
export default handler
