let handler = async(m, { conn, text }) => {
  if (!text) throw `[โ๐๐๐๐โ] NO PREFIX HAS BEEN DETECTED...`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || 'โxzXZ/i!#$%+ยฃยขโฌยฅ^ยฐ=ยถโรรทฯโโยฉยฎ:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`[โ๐๐๐๐โ] THE PREFIX HAS BEEN CHANGED TO  *${text}*`)
    // conn.fakeReply(m.chat, '[โ๐๐๐๐โ] ๐ด๐ป ๐ฟ๐๐ด๐ต๐ธ๐น๐พ ๐ท๐ฐ ๐๐ธ๐ณ๐พ ๐ฒ๐ฐ๐ผ๐ฑ๐ธ๐ฐ๐ณ๐พ ๐ฐ *${text}*', '0@s.whatsapp.net', 'Set Prefix Bot')
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(setprefix)$/i
handler.rowner = true

export default handler 
