let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, args }) => {  
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] THE OWNER HAS RESTRICTED (enable restrict / disable restrict) THE USE OF THIS COMMAND*'
if (!args[0]) throw '*[❗] ENTER THE NUMBER OF THE USER YOU WANT TO ADD*'    
try {    
let _participants = participants.map(user => user.id)
let users = (await Promise.all(
text.split(',')
.map(v => v.replace(/[^0-9]/g, ''))
.filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
.map(async v => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
const response = await conn.query({ tag: 'iq', attrs: { type: 'set', xmlns: 'w:g2', to: m.chat }, content: users.map(jid => ({ tag: 'add', attrs: {}, content: [{ tag: 'participant', attrs: { jid } }]}))})
const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
const add = getBinaryNodeChild(response, 'add')
const participant = getBinaryNodeChildren(add, 'participant')
for (const user of participant.filter(item => item.attrs.error == 403)) {
const jid = user.attrs.jid
const content = getBinaryNodeChild(user, 'add_request')
const invite_code = content.attrs.code
const invite_code_exp = content.attrs.expiration
let teks = `*[❗𝐈𝐍𝐅𝐎❗] IT WAS NOT POSSIBLE TO ADD TO @${jid.split('@')[0]}, THIS MAY HAPPEN BECAUSE THE NUMBER IS INCORRECT, THE PEOPLE HAVE RECENTLY LEAVED THE GROUP THE PERSON HAS CONFIGURED THEIR PRIVACY OF GROUPS, THE INVITATION TO THE GROUP WAS SENT IN THEIR PRIVATE TO THE USER*`
m.reply(teks, null, { mentions: conn.parseMention(teks)})
let captionn = `_Hey!!  Hi, I introduce myself, I'm The Mystic - Bot, and I'm a WhatsApp Bot, a person from the group used the command to add you to the group, but I couldn't add you, so I'm sending you the invitation to add yourself, we're waiting for you!!_`    
var messaa = await prepareWAMessageMedia({ image: jpegThumbnail }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ groupInviteMessage: { groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail }}), { userJid: jid })
await conn.relayMessage(jid, groupInvite.message, { messageId: groupInvite.key.id })}
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] IT WAS NOT POSSIBLE TO ADD THE NUMBER THAT I ENTERED, THIS MAY HAPPEN BECAUSE THE NUMBER IS INCORRECT, THE PERSON HAS RECENTLY LEFT THE GROUP OR THE PERSON HAS CONFIGURED THEIR GROUP PRIVACY, WE ADVISE YOU TO SEND THE INVITATION MANUALLY!!*'
}}
handler.help = ['add', '+'].map(v => v + 'numbrr')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler
