import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
ππ΄πππ»ππ°π³πΎπ π³π΄ π»π° π±πππππ΄π³π°

β’ π ππΈππ»π΄: ${title}
β’ π¨βπ€ π°πππΈππ: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
β’ πΎ π°π»π±ππΌ: ${album.name || 'No encontrado'}
β’ π πΆπ΄π½π΄ππΎ: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'No encontrado'}
β’ π ππ΄π»π΄π°ππ΄ π³π°ππ΄: ${release_date || 'No encontrado'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*[βππππβ] ππ΄ππΏπΎπ½π³π° π° ππ½ π°ππ³πΈπΎ*'
}
handler.command = /^quemusica|quemusicaes|whatmusic$/i
export default handler
