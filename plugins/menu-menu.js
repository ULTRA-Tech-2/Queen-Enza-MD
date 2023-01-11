import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://i.ibb.co/Tcxxv4S/95a5cc8344ac986644625b12636284ef.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══〘 💜💛💛💛💛💛💜 〙══╮
║    ◉— *𝗤𝗨𝗘𝗘𝗡-𝗘𝗡𝗭𝗔* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ello, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗢wner:* ᯤ 𝘼𝙨𝙞𝙛 𝙊𝙛𝙘 👑
║➤ *𝗡umber:* wa.me/923474187615
║➤ *𝗕ot ofc:* wa.me/923411773635
║➤ *𝗗ate:* ${date}
║➤ *𝗧ime activo:* ${uptime}
║➤ *𝗨sers:* ${rtotalreg}
╰═══╡❤️☀︎︎☀︎︎☀︎︎☀︎︎☀︎︎☀︎︎☀︎︎☀︎︎❤️︎︎╞═══╯

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗*🎖️ Level:* ${level}
┣✗*🧰 Experiencia:* ${exp}
┣✗*⚓ Rango:* ${role}
┣✗*💎 Diamantes:* ${limit}
┣✗*🍥 MysticCoins:* ${money}
┣✗*🎴 Tokens:* ${joincount}
┣✗*🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌'}
┗━━━━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗝𝗔𝗗𝗜 𝗕𝗢𝗧 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*This is the official Bot*'}
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 💛 _${usedPrefix}grupos_
┣✗ඬ⃟ 💛 _${usedPrefix}estado_
┣✗ඬ⃟ 💛 _${usedPrefix}infobot_
┣✗ඬ⃟ 💛 _${usedPrefix}speedtest_
┣✗ඬ⃟ 💛 _${usedPrefix}donar_
┣✗ඬ⃟ 💛 _${usedPrefix}grouplist_
┣✗ඬ⃟ 💛 _${usedPrefix}owner_
┣✗ඬ⃟ 💛 _${usedPrefix}script_
┣✗ඬ⃟ 💛 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗝𝗢𝗜𝗡 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗🍓 _${usedPrefix}join *link / url>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗦𝗘𝗥𝗕𝗢𝗧 - 𝗝𝗔𝗗𝗜𝗕𝗢𝗧 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🤖 _${usedPrefix}serbot_
┣✗ඬ⃟ 🤖 _${usedPrefix}stop_
┣✗ඬ⃟ 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗚𝗔𝗠𝗘𝗦 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}fucker *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}nega *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}lesbian *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}madarchod *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}sisterfucker *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}gandu *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}bondo *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}bitch *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}randi *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}rat *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}pregunta *<texto>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}slot *<apuesta>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}delttt_
┣✗ඬ⃟ 🎖️ _${usedPrefix}acertijo_
┣✗ඬ⃟ 🎖️ _${usedPrefix}simi *<texto>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}top *<texto>*_
┣✗ඬ⃟ 🎖️ _${usedPrefix}topgays_
┣✗ඬ⃟ 🎖️ _${usedPrefix}topotakus_
┣✗ඬ⃟ 🎖️ _${usedPrefix}formarpareja_
┣✗ඬ⃟ 🎖️ _${usedPrefix}verdad_
┣✗ඬ⃟ 🎖️ _${usedPrefix}challange_
┣✗ඬ⃟ 🎖️ _${usedPrefix}cancion_
┣✗ඬ⃟ 🎖️ _${usedPrefix}pista_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗘𝗡𝗔𝗕𝗟𝗘 / 𝗗𝗘𝗦𝗔𝗕𝗟𝗘 >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *welcome*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *welcome*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *modohorny*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *modohorny*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *antilink*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *antilink*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *antilink2*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *antilink2*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *detect*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *detect*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *audios*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *audios*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *autosticker*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *autosticker*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *antiviewonce*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *antiviewonce*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *antitoxic*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *antitoxic*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *antitraba*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *antitraba*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *antiarabes*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *antiarabes*_
┣✗ඬ⃟ ☑️ _${usedPrefix}enable *modoadmin*_
┣✗ඬ⃟ ☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┣✗*< 𝗥𝗘𝗣𝗢𝗥𝗧 𝗘𝗥𝗥𝗢𝗥𝗦 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🔰 _${usedPrefix}report *<text>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}instagram2 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}instagram3 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}twitter *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}fb *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}dapk2 *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣✗ඬ⃟ 📥 _${usedPrefix}play *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}play.1 *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}play.2 *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}playdoc *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}playlist *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}playlist2 *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}spotify *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}stickerly *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}ringtone *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}soundcloud *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}imagen *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}pinteret *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}wallpaper *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}wallpaper2 *<texto>*_
┣✗ඬ⃟ 📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣✗ඬ⃟ 📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┣✗ඬ⃟ 📥 _${usedPrefix}igstory *<nombre de usuario>*_
┣✗ඬ⃟ 📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗚𝗥𝗢𝗨𝗣𝗦 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣✗ඬ⃟ 💎 _${usedPrefix}kick *<@tag>*_
┣✗ඬ⃟ 💎 _${usedPrefix}kick2 *<@tag>*_
┣✗ඬ⃟ 💎 _${usedPrefix}listanum *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}kicknum *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣✗ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣✗ඬ⃟ 💎 _${usedPrefix}promote *<@tag>*_
┣✗ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣✗ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣✗ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣✗ඬ⃟ 💎 _${usedPrefix}infogroup_
┣✗ඬ⃟ 💎 _${usedPrefix}resetlink_
┣✗ඬ⃟ 💎 _${usedPrefix}link_
┣✗ඬ⃟ 💎 _${usedPrefix}setname *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}setdesc *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}invocar *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}setwelcome *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}setbye *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}hidetag *<texto>*_
┣✗ඬ⃟ 💎 _${usedPrefix}warn *<@tag>*_
┣✗ඬ⃟ 💎 _${usedPrefix}unwarn *<@tag>*_
┣✗ඬ⃟ 💎 _${usedPrefix}listwarn_
┣✗ඬ⃟ 💎 _${usedPrefix}fantasmas_
┣✗ඬ⃟ 💎 _${usedPrefix}destraba_
┣✗ඬ⃟ 💎 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🎴 _${usedPrefix}togifaud *<video>*_
┣✗ඬ⃟ 🎴 _${usedPrefix}toimg *<sticker>*_
┣✗ඬ⃟ 🎴 _${usedPrefix}tomp3 *<video>*_
┣✗ඬ⃟ 🎴 _${usedPrefix}tomp3 *<nota de voz>*_
┣✗ඬ⃟ 🎴 _${usedPrefix}toptt *<video / audio>*_
┣✗ඬ⃟ 🎴 _${usedPrefix}tovideo *<sticker>*_
┣✗ඬ⃟ 🎴 _${usedPrefix}tourl *<video / imagen / audio>*_
┣✗ඬ⃟ 🎴 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗘𝗙𝗙𝗘𝗖𝗧𝗦 𝗟𝗢𝗚𝗢>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣✗ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣✗ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣✗ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗧𝗘𝗫𝗧𝗦>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🥀 _${usedPrefix}piropo_
┣✗ඬ⃟ 🥀 _${usedPrefix}consejo_
┣✗ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┣✗ඬ⃟ 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗥𝗔𝗡𝗗𝗢𝗠 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🍥 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣✗ඬ⃟ 🍥 _${usedPrefix}cristianoronaldo_
┣✗ඬ⃟ 🍥 _${usedPrefix}messi_
┣✗ඬ⃟ 🍥 _${usedPrefix}meme_
┣✗ඬ⃟ 🍥 _${usedPrefix}itzy_
┣✗ඬ⃟ 🍥 _${usedPrefix}blackpink_
┣✗ඬ⃟ 🍥 _${usedPrefix}lolivid_
┣✗ඬ⃟ 🍥 _${usedPrefix}loli_
┣✗ඬ⃟ 🍥 _${usedPrefix}navidad_
┣✗ඬ⃟ 🍥 _${usedPrefix}ppcouple_
┣✗ඬ⃟ 🍥 _${usedPrefix}wpmontaña_
┣✗ඬ⃟ 🍥 _${usedPrefix}pubg_
┣✗ඬ⃟ 🍥 _${usedPrefix}wpgaming_
┣✗ඬ⃟ 🍥 _${usedPrefix}wpaesthetic_
┣✗ඬ⃟ 🍥 _${usedPrefix}wpaesthetic2_
┣✗ඬ⃟ 🍥 _${usedPrefix}wprandom_
┣✗ඬ⃟ 🍥 _${usedPrefix}wallhp_
┣✗ඬ⃟ 🍥 _${usedPrefix}wpvehiculo_
┣✗ඬ⃟ 🍥 _${usedPrefix}wpmoto_
┣✗ඬ⃟ 🍥 _${usedPrefix}coffee_
┣✗ඬ⃟ 🍥 _${usedPrefix}pentol_
┣✗ඬ⃟ 🍥 _${usedPrefix}caricatura_
┣✗ඬ⃟ 🍥 _${usedPrefix}ciberespacio_
┣✗ඬ⃟ 🍥 _${usedPrefix}technology_
┣✗ඬ⃟ 🍥 _${usedPrefix}doraemon_
┣✗ඬ⃟ 🍥 _${usedPrefix}hacker_
┣✗ඬ⃟ 🍥 _${usedPrefix}planeta_
┣✗ඬ⃟ 🍥 _${usedPrefix}randomprofile_
┣✗ඬ⃟ 🍥 _${usedPrefix}neko_
┣✗ඬ⃟ 🍥 _${usedPrefix}waifu_
┣✗ඬ⃟ 🍥 _${usedPrefix}akira_
┣✗ඬ⃟ 🍥 _${usedPrefix}akiyama_
┣✗ඬ⃟ 🍥 _${usedPrefix}anna_
┣✗ඬ⃟ 🍥 _${usedPrefix}asuna_
┣✗ඬ⃟ 🍥 _${usedPrefix}ayuzawa_
┣✗ඬ⃟ 🍥 _${usedPrefix}boruto_
┣✗ඬ⃟ 🍥 _${usedPrefix}chiho_
┣✗ඬ⃟ 🍥 _${usedPrefix}chitoge_
┣✗ඬ⃟ 🍥 _${usedPrefix}deidara_
┣✗ඬ⃟ 🍥 _${usedPrefix}erza_
┣✗ඬ⃟ 🍥 _${usedPrefix}elaina_
┣✗ඬ⃟ 🍥 _${usedPrefix}eba_
┣✗ඬ⃟ 🍥 _${usedPrefix}emilia_
┣✗ඬ⃟ 🍥 _${usedPrefix}hestia_
┣✗ඬ⃟ 🍥 _${usedPrefix}hinata_
┣✗ඬ⃟ 🍥 _${usedPrefix}inori_
┣✗ඬ⃟ 🍥 _${usedPrefix}isuzu_
┣✗ඬ⃟ 🍥 _${usedPrefix}itachi_
┣✗ඬ⃟ 🍥 _${usedPrefix}itori_
┣✗ඬ⃟ 🍥 _${usedPrefix}kaga_
┣✗ඬ⃟ 🍥 _${usedPrefix}kagura_
┣✗ඬ⃟ 🍥 _${usedPrefix}kaori_
┣✗ඬ⃟ 🍥 _${usedPrefix}keneki_
┣✗ඬ⃟ 🍥 _${usedPrefix}kotori_
┣✗ඬ⃟ 🍥 _${usedPrefix}kurumi_
┣✗ඬ⃟ 🍥 _${usedPrefix}madara_
┣✗ඬ⃟ 🍥 _${usedPrefix}mikasa_
┣✗ඬ⃟ 🍥 _${usedPrefix}miku_
┣✗ඬ⃟ 🍥 _${usedPrefix}minato_
┣✗ඬ⃟ 🍥 _${usedPrefix}naruto_
┣✗ඬ⃟ 🍥 _${usedPrefix}nezuko_
┣✗ඬ⃟ 🍥 _${usedPrefix}sagiri_
┣✗ඬ⃟ 🍥 _${usedPrefix}sasuke_
┣✗ඬ⃟ 🍥 _${usedPrefix}sakura_
┣✗ඬ⃟ 🍥 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 18 + 𝗛𝗔𝗥𝗔𝗠 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🔞 _${usedPrefix}pack_
┣✗ඬ⃟ 🔞 _${usedPrefix}pack2_
┣✗ඬ⃟ 🔞 _${usedPrefix}pack3_
┣✗ඬ⃟ 🔞 _${usedPrefix}videoxxx_
┣✗ඬ⃟ 🔞 _${usedPrefix}videolesbixxx_
┣✗ඬ⃟ 🔞 _${usedPrefix}tetas_
┣✗ඬ⃟ 🔞 _${usedPrefix}booty_
┣✗ඬ⃟ 🔞 _${usedPrefix}ecchi_
┣✗ඬ⃟ 🔞 _${usedPrefix}furro_
┣✗ඬ⃟ 🔞 _${usedPrefix}imagenlesbians_
┣✗ඬ⃟ 🔞 _${usedPrefix}panties_
┣✗ඬ⃟ 🔞 _${usedPrefix}pene_
┣✗ඬ⃟ 🔞 _${usedPrefix}porno_
┣✗ඬ⃟ 🔞 _${usedPrefix}randomxxx_
┣✗ඬ⃟ 🔞 _${usedPrefix}pechos_
┣✗ඬ⃟ 🔞 _${usedPrefix}yaoi_
┣✗ඬ⃟ 🔞 _${usedPrefix}yaoi2_
┣✗ඬ⃟ 🔞 _${usedPrefix}yuri_
┣✗ඬ⃟ 🔞 _${usedPrefix}yuri2_
┣✗ඬ⃟ 🔞 _${usedPrefix}trapito_
┣✗ඬ⃟ 🔞 _${usedPrefix}hentai_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwloli_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfworgy_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwfoot_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwass_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwbdsm_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwcum_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwero_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwfemdom_
┣✗ඬ⃟ 🔞 _${usedPrefix}nsfwglass_
┣✗ඬ⃟ 🔞 _${usedPrefix}hentaipdf *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗘𝗙𝗙𝗘𝗖𝗧𝗦 / 𝗔𝗨𝗗𝗜𝗢𝗦 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🎤 _${usedPrefix}bass_
┣✗ඬ⃟ 🎤 _${usedPrefix}blown_
┣✗ඬ⃟ 🎤 _${usedPrefix}deep_
┣✗ඬ⃟ 🎤 _${usedPrefix}earrape_
┣✗ඬ⃟ 🎤 _${usedPrefix}fast_
┣✗ඬ⃟ 🎤 _${usedPrefix}fat_
┣✗ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣✗ඬ⃟ 🎤 _${usedPrefix}reverse_
┣✗ඬ⃟ 🎤 _${usedPrefix}robot_
┣✗ඬ⃟ 🎤 _${usedPrefix}slow_
┣✗ඬ⃟ 🎤 _${usedPrefix}smooth_
┣✗ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 📳 _${usedPrefix}start_
┣✗ඬ⃟ 📳 _${usedPrefix}next_
┣✗ඬ⃟ 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗦𝗘𝗔𝗥𝗖𝗛 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🔍 _${usedPrefix}modapk *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}stickersearch *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}animeinfo *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣✗ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗔𝗨𝗗𝗜𝗢𝗦 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🔊 _Quien es tu sempai botsito 7w7_
┣✗ඬ⃟ 🔊 _Te diagnostico con gay_
┣✗ඬ⃟ 🔊 _A nadie le importa_
┣✗ඬ⃟ 🔊 _Fiesta del admin_
┣✗ඬ⃟ 🔊 _Fiesta del administrador_ 
┣✗ඬ⃟ 🔊 _Vivan los novios_
┣✗ඬ⃟ 🔊 _Feliz cumpleaños_
┣✗ඬ⃟ 🔊 _Noche de paz_
┣✗ඬ⃟ 🔊 _Buenos dias_
┣✗ඬ⃟ 🔊 _Buenos tardes_
┣✗ඬ⃟ 🔊 _Buenos noches_
┣✗ඬ⃟ 🔊 _Audio hentai_
┣✗ඬ⃟ 🔊 _Chica lgante_
┣✗ඬ⃟ 🔊 _Feliz navidad_
┣✗ඬ⃟ 🔊 _Vete a la vrg_
┣✗ඬ⃟ 🔊 _Pasa pack Bot_
┣✗ඬ⃟ 🔊 _Atencion grupo_
┣✗ඬ⃟ 🔊 _Marica quien_
┣✗ඬ⃟ 🔊 _Murio el grupo_
┣✗ඬ⃟ 🔊 _Oh me vengo_
┣✗ඬ⃟ 🔊 _tio que rico_
┣✗ඬ⃟ 🔊 _Viernes_
┣✗ඬ⃟ 🔊 _Baneado_
┣✗ඬ⃟ 🔊 _Sexo_
┣✗ඬ⃟ 🔊 _Hola_
┣✗ඬ⃟ 🔊 _Un pato_
┣✗ඬ⃟ 🔊 _Nyanpasu_
┣✗ඬ⃟ 🔊 _Te amo_
┣✗ඬ⃟ 🔊 _Yamete_
┣✗ඬ⃟ 🔊 _Bañate_
┣✗ඬ⃟ 🔊 _Es puto_
┣✗ඬ⃟ 🔊 _La biblia_
┣✗ඬ⃟ 🔊 _Onichan_
┣✗ඬ⃟ 🔊 _Mierda de Bot_
┣✗ඬ⃟ 🔊 _Siuuu_
┣✗ඬ⃟ 🔊 _Epico_
┣✗ඬ⃟ 🔊 _Shitpost_
┣✗ඬ⃟ 🔊 _Rawr_
┣✗ඬ⃟ 🔊 _UwU_
┣✗ඬ⃟ 🔊 _:c_
┣✗ඬ⃟ 🔊 _a_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗧𝗢𝗢𝗟𝗦 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|texto|amout>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}tamaño *<amout> <image / video>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}styletext *<texto>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}traducir *<texto>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}nowa *<number>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}covid *<pais>*_
┣✗ඬ⃟ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗥𝗣𝗚 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 💵 _${usedPrefix}adventure_
┣✗ඬ⃟ 💵 _${usedPrefix}cazar_
┣✗ඬ⃟ 💵 _${usedPrefix}cofre_
┣✗ඬ⃟ 💵 _${usedPrefix}balance_
┣✗ඬ⃟ 💵 _${usedPrefix}claim_
┣✗ඬ⃟ 💵 _${usedPrefix}heal_
┣✗ඬ⃟ 💵 _${usedPrefix}lb_
┣✗ඬ⃟ 💵 _${usedPrefix}levelup_
┣✗ඬ⃟ 💵 _${usedPrefix}myns_
┣✗ඬ⃟ 💵 _${usedPrefix}perfil_
┣✗ඬ⃟ 💵 _${usedPrefix}work_
┣✗ඬ⃟ 💵 _${usedPrefix}minar_
┣✗ඬ⃟ 💵 _${usedPrefix}minar2_
┣✗ඬ⃟ 💵 _${usedPrefix}buy_
┣✗ඬ⃟ 💵 _${usedPrefix}buyall_
┣✗ඬ⃟ 💵 _${usedPrefix}verificar_
┣✗ඬ⃟ 💵 _${usedPrefix}robar *<cantidad> <@tag>*_
┣✗ඬ⃟ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣✗ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 🍓 _${usedPrefix}sticker *<responder a imagen o video>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}sticker *<enlace / link / url>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}s *<responder a imagen o video>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}s *<enlace / link / url>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}sfull *<imagen o video>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}scircle *<imagen>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}sremovebg *<imagen>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}semoji *<tipo> <emoji>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}attp *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}attp2 *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}attp3 *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}ttp *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}ttp2 *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}ttp3 *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}ttp4 *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}ttp5 *<texto>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}pat *<@tag>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}slap *<@tag>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}kiss *<@tag>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}dado_
┣✗ඬ⃟ 🍓 _${usedPrefix}wm *<packname> <author>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣✗ඬ⃟ 🍓 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗢𝗪𝗡𝗘𝗥 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 👑 > *<funcion>*
┣✗ඬ⃟ 👑 => *<funcion>*
┣✗ඬ⃟ 👑 $ *<funcion>*
┣✗ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣✗ඬ⃟ 👑 _${usedPrefix}resetprefix_
┣✗ඬ⃟ 👑 _${usedPrefix}autoadmin_
┣✗ඬ⃟ 👑 _${usedPrefix}leavegc_
┣✗ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣✗ඬ⃟ 👑 _${usedPrefix}blocklist_
┣✗ඬ⃟ 👑 _${usedPrefix}block *<@tag / numero>*_
┣✗ඬ⃟ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *restrict*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *restrict*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *autoread*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *autoread*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *public*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *public*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *pconly*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *pconly*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *gconly*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *gconly*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *anticall*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *anticall*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *antiprivado*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *antiprivado*_
┣✗ඬ⃟ 👑 _${usedPrefix}enable *modejadibot*_
┣✗ඬ⃟ 👑 _${usedPrefix}disable *modejadibot*_
┣✗ඬ⃟ 👑 _${usedPrefix}msg *<texto>*_
┣✗ඬ⃟ 👑 _${usedPrefix}banchat_
┣✗ඬ⃟ 👑 _${usedPrefix}unbanchat_
┣✗ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣✗ඬ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣✗ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣✗ඬ⃟ 👑 _${usedPrefix}añadirxp *<@tag>*_
┣✗ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣✗ඬ⃟ 👑 _${usedPrefix}bc *<texto>*_
┣✗ඬ⃟ 👑 _${usedPrefix}bcchats *<texto>*_
┣✗ඬ⃟ 👑 _${usedPrefix}bcgc *<texto>*_
┣✗ඬ⃟ 👑 _${usedPrefix}bcbot *<texto>*_
┣✗ඬ⃟ 👑 _${usedPrefix}cleartpm_
┣✗ඬ⃟ 👑 _${usedPrefix}restart_
┣✗ඬ⃟ 👑 _${usedPrefix}update_
┣✗ඬ⃟ 👑 _${usedPrefix}banlist_
┣✗ඬ⃟ 👑 _${usedPrefix}addprem *<@tag>*_
┣✗ඬ⃟ 👑 _${usedPrefix}delprem *<@tag>*_
┣✗ඬ⃟ 👑 _${usedPrefix}listprem_
┣✗ඬ⃟ 👑 _${usedPrefix}listcmd_
┣✗ඬ⃟ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣✗ඬ⃟ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣✗ඬ⃟ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝗠𝗘𝗧𝗔 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 - 𝗩𝗜𝗥𝗨𝗦 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣✗ඬ⃟ 💀 _${usedPrefix}crash𝟷_
┣✗ඬ⃟ 💀 _${usedPrefix}crash2_
┣✗ඬ⃟ 💀 _${usedPrefix}crash3_
┣✗ඬ⃟ 💀 _${usedPrefix}crash4_
┣✗ඬ⃟ 💀 _${usedPrefix}crash5_
┣✗ඬ⃟ 💀 _${usedPrefix}crash6_
┣✗ඬ⃟ 💀 _${usedPrefix}crash7_
┣✗ඬ⃟ 💀 _${usedPrefix}crash8_
┗━━━━━━━━━━━━━━━━━━━┛
`.trim()
let buttons = [
//*{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '🌹 𝙾𝚆𝙽𝙴𝚁 🌹' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝗤𝗨𝗘𝗘𝗡-𝗘𝗡𝗭𝗔-𝗠𝗗 👑',
body: null,
thumbnail: img,
sourceUrl: `https://wa.me/+923474187615`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*Error.......*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
