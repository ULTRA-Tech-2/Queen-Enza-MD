import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[βππππβ] ENTER THE NAME OF SOME SONG TO SEARCH*`
try {
let res = await fetch(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let json2 = await res.json()
let urlSC = await json2.hasil[0].url
let res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${urlSC}`)
let json = await res2.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text()
let soundcloudt = `βββββ¬ ππΎππ½π³π²π»πΎππ³ β­ββββΎβ
β¬
ββ£β¨ *ππΈππ»π΄:* ${json.title}
β΄
β¬
ββ£π *πππ» π³πΈππ΄π²π:* ${shortUrl}
β΄
β¬
ββ£ *- πππππππππ πΌππππ...*
β΄
β¬
β _α΄Κα΄ α΄Κsα΄Ιͺα΄ οΉ£ Κα΄α΄_
β΄`
conn.sendFile(m.chat, json.thumb, '', soundcloudt, m)
conn.sendMessage(m.chat, { audio: { url: json.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
//conn.sendFile(m.chat, json.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[βππππβ] Error.......*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler
