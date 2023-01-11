import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTER THE NAME OF SOME SONG TO SEARCH*`
try {
let res = await fetch(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let json2 = await res.json()
let urlSC = await json2.hasil[0].url
let res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${urlSC}`)
let json = await res2.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text()
let soundcloudt = `❒═══❬ 𝚂𝙾𝚄𝙽𝙳𝙲𝙻𝙾𝚄𝙳 ❭═══╾❒
┬
├‣✨ *𝚃𝙸𝚃𝙻𝙴:* ${json.title}
┴
┬
├‣💚 *𝚄𝚁𝙻 𝙳𝙸𝚁𝙴𝙲𝚃:* ${shortUrl}
┴
┬
├‣ *- 𝚄𝚙𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝙼𝚞𝚜𝚒𝚌...*
┴
┬
├ _ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ_
┴`
conn.sendFile(m.chat, json.thumb, '', soundcloudt, m)
conn.sendMessage(m.chat, { audio: { url: json.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
//conn.sendFile(m.chat, json.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] Error.......*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler
