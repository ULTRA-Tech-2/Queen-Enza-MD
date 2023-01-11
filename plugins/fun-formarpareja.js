let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, YOU SHOULD GET MARRIED 💍 𝙲𝙾𝙽 ${toM(b)}, YOU MAKE GOOD COUPLE 💓*`, null, {
mentions: [a, b]
})}
handler.help = ['couple']
handler.tags = ['main', 'fun']
handler.command = ['couple','marry']
handler.group = true
export default handler
