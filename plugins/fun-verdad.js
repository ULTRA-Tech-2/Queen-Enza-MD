let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────�? 𝚅𝙴𝚁𝙳𝙰𝙳 」─*\n*�?${pickRandom(global.verdad)}�?*\n*└────�? 𝙼𝚈𝚂𝚃𝙸𝙲 」─*`, m)
}
handler.help = ['verdad']
handler.tags = ['fun']
handler.command = /^verdad/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.verdad = [
"Have you ever liked someone? How long?",
   "If it is possible or if you want, in gc / outside of gc, who will you make friends with? (It can be different / of the same type)",
   "what is your biggest fear?",
   "Have you ever liked someone and felt that person like you too?",
   "What is the name of your friend's ex-boyfriend that you once secretly liked?",
   "Have you ever stolen your mother's or father's money? The reason?",
   "what makes you happy when you're sad",
   "Have you ever been unrequited love? If you have been with who? How does it feel brou?",
   "Have you ever had an affair with someone?",
   "the most feared",
   "who is the most influential person in your life",
   "how proud you are this year",
   "who is the person who can make you sick",
   "who is the person who ever made you horny",
   "(for Muslims) have you never prayed all day?",
   "Who is closest to your ideal match type here",
   "Who do you like to play with?",
   "Have you ever rejected someone? Why?",
   "Mention the incident that hurt you and that you still remember",
   "What achievements have you obtained this year?",
   "What is your worst habit at school?", "What television program do you hate the most? Give the reason!", "What is the most beautiful dress What is ugly (in your opinion) that you have used and when did you use it?", "What is the worst (gossip) thing that you have said about your friend?", "What is the most embarrassing of you?"," What is the first thing you see when you look at another person (of the opposite sex)?",
 "What is the first thing that comes to your mind when you look in the mirror?","What is the dumbest thing you have done in your life?","What is the worst dream you have ever had? had?"," What is the craziest dream you can remember so far?",
 "What is your worst trait in your opinion?",
 "What trait would you like to change about yourself?",
 "What trait would you like to change in your friend?",
 "What would you do if your boyfriend told you that you have a bad nose or fingers?",
 "What do you think about before going to sleep? eg: fantasize about a partner, etc.",
 "What do you think stands out the most about you?", "What part of your friend's body do you like the most and wish you had?",
 "What part of your body do you hate the most?", "Of all the classes in school, which class would you like to enter and which class would you like to avoid?",
 "Describe your closest friend!"," Describe yourself in one word!"," What movies and songs have made you cry?",
 "What is something that you have kept secret until now and no one has discovered it?",
 "What is the most romantic thing that someone (of the opposite sex) has done or given you?",
 "What is the most unpleasant thing you have experienced?",
 "If you were born again and you had to be one of your friends, who would you choose to be?",
 "If you have super power / super power, what do you want to do?",
 "If the apocalypse comes soon, what do you do?"
 "If you were asked to undergo plastic surgery on a sample of your classmate's face, who would you imitate?"
"Have you ever stolen anything?"
 "Are you afraid of dying? Why?",
 "When was the last time you cried and why?",
 "What are your special skills?",
 "How can you like the person you like?",
 "What do you think is a good trait of your closest friend that he or she doesn't know about?",
 "What kind of person would you like to marry one day?",
 "In your opinion, what is the most attractive job for the friend who is sitting next to you? And why?",
 "Who do you want to swap with for a day? (closest friends you both know) and why",
 "Have you ever secretly hoped that someone's relationship with his girlfriend would break up? Who?",
 "Do you prefer FRIENDS or FRIENDS? Why?",
 "What quote do you remember the most and do you like?",
 "What secrets have you never told your friends until now?",
 "Who are your true role models?",
 "Which of your friends do you think she is matre?",
 "Which of your friends do you think has the least haircut?"
 "Which of your friends is the most photogenic?",
 "Who is your best ex? And why did they break up?!",
 "What's the name of the artist you talked to in secret?",
 "What was the name of the teacher you liked?",
 "What is the name of your friend's ex-girlfriend that you have secretly liked?",
 "What is the name of the person (of the opposite sex) that you think would be fun to be a girlfriend?",
 "What is the name of the person you hate, but think that person likes you (not necessarily of the opposite sex)?",
 "What's the name of the person you've been secretly pointing at?",
 "Who is the person (of the opposite sex) that comes to your mind the most?",
 "Who is the most annoying person among your friends? The reason!",
 "Which of your friends do you think should be renewed?",
 "Who is closest to your ideal partner here?",
 "Father or mother",
 "The part of the body you don't like",
 "Have you ever cheated?",
 "Have you ever been kissed?",
 "What is the first thing you would do if you woke up as the opposite sex?",
 "Have you ever let someone else get in trouble for something you did?",
 "What is the most embarrassing thing you have done in your life?",
 "What is the most ridiculous reason why you have broken up with someone?",
 "What is the worst habit you have?",
 "What do you think is your best feature? And what is the worst?",
 "What is the bravest thing you have ever done?",
 "When was the last time you wet the bed?",
 "What do you dream about sleeping the most?",
 "If he's going to make money illegally, how does he do it?"
 "What childish things do you keep doing?",
 "If you were blind, who would be your guide dog?",
 "What impresses you the most?",
 "If you were allowed to use only 3 words for the rest of the night from now on, what would it be?",
 "If you were a dictator, what law would you enact first?",
 "If you lived during the Nazi era, who would you be?",
 "What was the most embarrassing experience in school / study time / education / last year?",
 "What is the biggest mistake of your life?",
"What would you never do, even if you knew you only had 12 hours to live?",
 "What crimes have you committed?",
 "Tell me a secret from your childhood.",
 "What is your biggest representative (secret)?",
 "¿ What do you want to do with me � ? (x person), if you can then erase his memory (é l, � ?)?",
 "What's the worst thing you've done to someone?",
 "Who do you like the most?",
 "Have you ever fallen in love with any of those present?",
 "If you were a vampire, which of us would you bite now?",
 "Have you ever defecated in public?",
 "What is your darkest fantasy?",
 "What's the best thing you've ever had with someone else?",
 "What is the biggest turnoff for you?",
 "What do you like the most about your body and what is the ugliest?",
 "Who would you like to see naked?",
 "Who in this round can make you fall in love?",
 "Have you ever had an erotic dream where someone from this group happened?",
 "If you are going to get a tattoo in the genital area, what will be there?",
 "What is more important in a relationship: sex or love?",
 "Do you think sex is cool, well, well, fun sometimes, or do you really not care?"
 "What makes you really love?",
 "How many times a week/month do you have sex and how often do you want to have sex?",
 "How many sexual partners have you slept with?",
 "What part of the body makes you the most?",
 "How, where and with whom were you first?",
 "How important are prolonged foreplay to you?",
 "What should a man or a woman do to seduce you?",
 "Have you ever had sex with a good friend?",
 "Have you ever had sexual relations with any of these groups, except with his partner?",
 "What animal best suits you and why?",
 "What is your worst date?",
 "Who do you want to kiss now?",
 "What is your secret dark fantasy?",
 "Would you rather tattoo your ass or get your tongue pierced?"
 "Are you always loyal?",
 "Do you have a teenage crush?",
 "Which person did you fall in love with?",
 "What celebrity would you like to date?",
 "What was the most embarrassing moment of your life?",
 "Which mouth do you like the most in the group here?",
 "Which player has the most beautiful hand?",
 "Where was your first kiss?",
 "Who in the group would you like to kiss the most?",
 "Who at the table is perhaps the funniest?",
 "What is the biggest mistake of your life?",
 "Did something embarrassing happen to you on a date?",
 "Have you ever been in contact with drugs?",
 "Which person do you want to kiss now?",
 "When was the last time he was drunk?",
 "Have you ever cheated on a school test?",
 "Have you stolen anything in the past?",
 "Do you snore at night?",
 "What is your favorite song?",
 "Which players will you trade with for 1 week and why?",
 "You moved to a deserted island, who did you take from here?",
 "What do you fear the most?",
 "Where do you shave everywhere?",
 "Do you have a nickname?",
 "Do you look in the bathroom before you wash up?",
 "Who gave you the worst anguish?",
 "How many times have you kissed",
 "What is the most embarrassing thing that has happened to you?",
 "How many boys/girls have you kissed?",
 "Who are you in love with?",
 "What star do you like",
 "Did you start something with XY (insert name)?",
 "Have you ever stolen anything?"

] 
