/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`)
}
handler.tags = ['frases']
handler.command = ['piropo']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["I would like to be paper to be able to wrap that chocolate.", "You are like Wi-Fi without a password, everyone is looking for you", "Who was a bus to walk around the curves of your heart.", "I want to fly without wings and get out of this universe, enter yours and love you in silence.", "I would like to be butter to melt in your arepa.", "If beauty were a sin, you would already be in hell.", "I would like to be a cat to spend 7 lives By Your Side.", "Stealing Is Wrong But A Kiss From Your Mouth I Would Steal It From Me.", "How Beautiful The Sky Is When It's Clear But Love Is More Beautiful When I Have You By My Side.", "Pretty, Walk In The Shade, The Sun Melts The Chocolates.", "If It Were An Email You Would Be My Password.", "I would like you to go to the mountains to give you a machete", "I lost my phone number. Can you give me yours?", " What's your name to ask Santa Claus for a gift?", "There are many stars in the sky, but the brightest is on Earth and it's you.", "Did the sun just come out or is it smiling  What are you giving me today?", "It's not the rum or the beer, it's you who has gone to my head", "If we talk about mathematics you are the sum of all my desires.", "You look like Google because you have everything what I'm looking for.", "My favorite coffee is the one with your eyes.", "I want to be photoshop to retouch your whole body.", "I wish you were cereal, to spoon you in the morning.", "Whoever was hungry , to give you three times a day."]
