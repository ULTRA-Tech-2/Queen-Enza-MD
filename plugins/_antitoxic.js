const toxicRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|asu|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|goblok|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 0
       if (!(user.warn >= 0)) await m.reply(`${user.warn == 1 ? `Hello *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, say the word (${isToxic}) forbidden in this bot *${user.warn}/5* advertencia`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 0) {
       user.warn = 0
       await m.reply(`Hello *@${m.sender.split`@`[0]}*, Bad Word you will be blocked and removed from this group`, false, { mentions: [m.sender] })
       user.banned = false
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
