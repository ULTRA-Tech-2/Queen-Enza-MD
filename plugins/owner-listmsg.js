let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*π° LIST OF TEXTS/MESSAGES/KEYWORDSπ°*

*β³οΈ πΌπ΄πππ°πΆπ΄ β³οΈ*
${Object.keys(msgs).map(v => '*ππ» ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/
export default handler