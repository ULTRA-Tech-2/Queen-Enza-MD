let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 𝙲𝙷𝙰𝙻𝙻𝙴𝙽𝙶𝙴」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 𝙼𝚈𝚂𝚃𝙸𝙲 」─*`, m)
}
handler.help = ['challenge']
handler.tags = ['fun']
handler.command = /^challenge/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
""Pass the pack of an ant",
 "Tell your friends that you are going to live in the US and send me a screenshot of what they told you",
 "Shout from the window that you want to suck and send me the video",
 "Write the name of your crush",
 "You must put the name of my creator in your WhatsApp status, without giving context",
 "Send me a picture of you",
 "You must draw the name of a member of the group somewhere on your body, then take a photo and send it",
 "Take a picture kissing a TV",
  "Send me a picture in underwear",
 "Write on your WhatsApp status that you like to eat dirt",
 "You must put the photograph of a group participant who is of the opposite sex to yours on your WhatsApp profile for 3 days 📸📸",
 "You have to send an audio singing the song: A duck that is happily singing cua cua 🦆",
 "Send a message to your ex and tell him I still like you", "Send an audio saying I love The Shadow Brokers - Bot",
 "Tell your crush that you love her and send a screenshot to the group", "Send an audio singing",
 "Send a photo in which you appear without covering your face or anything", "Send a video dancing",
 "Invite people you don't know to take a selfie with you and then send it to the group",
 "Choose some random numbers from your contacts and send them a text message 'I'm pregnant@'.",
 "Take whatever drink is near you, then mix it with chili and drink!",
 "Take a random number from your contacts, call him and say 'I love you'",
 "Buy the cheapest meal in the cafeteria (or buy a bottle of water) and sob to your classmates, 'This...is the most expensive meal I've ever bought)'",
 "Buy a bottle of coke and splash flowers with it in front of the crowd.",
 "Stand near the refrigerator, close your eyes, choose random food in it, even when you eat, your eyes should be closed.",
 "Standing in the middle of the basketball court and yelling: 'I LOVE YOU MY PRINCE/PRINCESS'",
 "Pay your respects to someone in the class, and then say, 'I am at your service, Your Majesty,'"
 "Walking clapping and singing 'Happy Birthday' song from class to hallway.",
 "Get down on one knee and say 'Marry me?'  the first person to enter the room.",
 "Make an absurd headdress with tissue, whatever it is, keep asking for poses in front of the camera, keep going up,"
 "Say 'YOU'RE BEAUTIFUL / VERY BEAUTIFUL, DON'T LIE' to the girl you think she's the prettiest in this class.",
 "Say to someone in class: 'First they told me she was your twin, we broke up, and then I had plastic surgery. And this is the most serious thing I've ever said.'"
 "Throwing someone's notebook into the trash, in front of her eyes, saying 'This book no one can understand'"
 "Pluck the hair off your own leg 3 times!",
 " Chat with your parents, tell them you miss them with sad emoticons.",
 "Try googling scary or ridiculous things like trypophobia etc.",
 " Sit relaxed in the middle of the basketball court while pretending it's a sunbathing beach.",
 "Fill your mouth with water and you have to go up to two rounds, if you laugh and spill or drink then you have to refill and add one more round.",
 " Greet the first person to walk into this room and say 'Welcome to Who Wants to Be a Millionaire!'  ",
 "Text your parents 'Hey bro! I just bought the latest issue of Playboy magazine!'  ",
"Send a text to your parents: 'Mom, Dad, I know I'm an adopted child from the orphanage. Don't hide this anymore.'"
 "Send three random numbers in your contacts and write 'I just became a model for Playboy magazine'",
 "Eat a spoonful of sweet soy sauce and soy sauce!",
 "Eat something but don't use your hands.",
 "Getting mad at your friends who don't come even though you have a date to play 'Truth or Dare' together",
 "Crack the egg with your head!",
 "Eat food that has been mixed and will taste strange, but make sure that the food is not harmful to your health in the long or short term.",
 "Dance like Girls' Generation for the boys in front of the class, or dance like Super Junior for the girls.",
 "Raise the flagpole without the flag.",
 "Talking about the person you like, your closest friends, the opposite sex you don't know at all and the like.",
 "Copy all your friends' hairstyles.",
 "Singing the song HAI TAYO in front of a lot of people while dancing,"
 "Sing the Baby Shark song out loud in the classroom.",
 "Borrow something from the neighbors",
 "Call for the signature of one of the fiercest professors while saying 'You are truly the person I admire most in the world'",
 "Ask someone (randomly) on the street for money saying 'I don't have money to have an angkot'.",
 "Drink something that has been prepared/agreed upon, but make sure it's not dangerous, it may be like drinking syrup mixed with soy sauce.",
 "Talking to your crush's scared-emoticon, it's okay to chat with whatever you want, through whatever means you can.",
 " Sing your favorite Disney movie outside the house while you scream.",
 " Name 1 blue to 20 blue quickly and you must not make any mistakes. If it is wrong, it must be repeated from the beginning.",
 " Put on a copy paper crown and tell everyone in the room 'HONOR THE KING' while pointing to each person with a ruler.",
 "Put your pants back on until the next morning.",
 "Hug the person you DON'T like in class and say, 'Thank you so much for being the best person for me,'"
 "Go to a wide field, then run as fast as you can while saying 'I'm crazy, I'm crazy'",
 "Pick a flower and then attach it to someone you don't know (must be of the opposite sex)",
 "Pick a random person on the street, then say 'You don't know you're beautiful' (ala One Direction)",
 "Pretending to be possessed eg: possessed by a tiger, etc.",
 "Ask him to whistle as his mouth is full of food again.",
 "Ask to be a waiter to serve you with your friends for lunch.",
 " Tell them to use socks to make gloves.",
 "Tell them to wear the weirdest hat / silliest helmet for the next round.",
 "Call your mom and tell her 'mom, I want to get married as soon as possible'",
 "Call your ex and say 'I miss you'",
 "Switch clothes with the closest person until the next round.",
 "Update status on WhatsApp anything with words starting with 'S'",
 "Upload a singing video to YouTube that is singing popular songs.",
 "Color your fingernails and toenails in different colors for a week.",
 "eat 2 tablespoons of rice without garnishes",
 "Send the '🦄💨' emoji every time you write in a group for 1 day",
 "say 'Welcome to Who Wants to Be a Millionaire!'  to all the groups you have",
 "sing the chorus to the last song you played",
 "Send a voice audio to your ex / crush / girlfriend, say hi (name), I want to call, just a moment. I miss you 🥺👉🏼👈🏼 ",
 "Tell random people: First they told me I was your twin, we broke up, and then I had plastic surgery. And this,"
 "Make 1 rhyme for the first player!",
 "tell your own version of embarrassing things",
 "change name to 'Gay' for 24 hours",
 "Mention your type of girlfriend!",
 "Say 'I'm in love with you, do you want to be my boyfriend or not?'  to the last opposite sex you chatted with on WhatsApp, wait for him to reply",
 "Talk to your ex on WhatsApp and tell him 'I love you, please come back'. Send a screenshot as evidence of the challenge fulfilled!"
] 
