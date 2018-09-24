// To be answered by Men

var insertA = ["I want a woman that has the body of a goddess. So what if she’s broke?", "Is she gifted in the right places? That’s what matters. I’d handle all the monetary needs", "If she has the body of Kim, I will provide the money Kanye has", "Her body is fire. Her pocket is empty. Give me!!!!"];

var insertB = ["I want a woman who is intelligent and is well trained. It doesn’t matter if she’s not spiritual", "There’s no topic she can’t talk about. Very versatile about everything but spiritual matters", "She is smart and intelligent but all the things religious people do are not her thing", "She’s a good woman and very smart. The importance of religion is often over emphasized"];

var insertC = ["I want a highly ambitious woman. Who cares if we have sex once a month or quarter?", "An intelligent woman who can hold it down is better than a woman who can last forever in bed", "She’s highly ambitious and it’s fine if it means very little action in the other room", "She is so hardworking and applies herself in everything. Everything but sex."];

var insertD = ["I want a woman with awesome curves and a pretty face that isn’t spiritual. I can’t be bothered.", "Her looks and cat walk blows me away. She doesn’t have to be spiritual. Who has spiritual helped?", "I will do all the praying and other religious duties. All I want is  for her to have a banging body", "She doesn’t need to believe in anything spiritual. Her attractiveness is more important to me."];

var insertE = ["I want a woman of solid character. It doesn't matter if the sex is boring and happens once a month.", "Does she have an awesome character? Then yes. Everything else including sex doesn’t really matter", "Her character is much more important than anything else to me. Her sexual ability is not so important", "Her character is worth emulating. A role model to role models. Her cluelessness when it comes to sex is unrivaled"];

var insertF = ["I want a highly ambitious woman even if she may earn more than I so long as she doesn’t bore me with spiritual stuff", "She’s definitely on her way to take over the world. She’s not a religious person and that’s fine with me", "Tenacious, Hardworking and persistence is who she is. Prayers and all those religious stuff don’t go down well with her though", "She’s disciplined and has a work-ethic that’s enviable. She’s not a religious person and i don’t mind"];

var insertG = ["I want a woman who makes her money. She could have a bad character but that’s fine", "She has all the money in the world but she is character bankrupt.", "Money is not a problem for her. Her character is a problem though but that’s fine ", "So long as there’s a lot of money in the bank, her character doesn’t matter one bit"];

var insertH = ["I want a woman who can blow my brains out, not literally. So what if she’s not there physically", "I’m not interested in a fine body especially if she’s very good in bed", "We’d make love on the couch, in the bath, any and everywhere. Everything else including her physique is unimportant", "She might be the prettiest in the world but if she can’t match me in the bedroom, I’m definitely not interested."];

var insertI = ["I want a woman who would do all the spiritual stuff on my behalf. She can depend solely on me for money", "It’s okay if she’s broke so long as she’s very spiritual", "She’s very religious but has very little money and that's fine. I’m supposed to provide anyways", "She’s as broke as can be but very religious. I’m happy with that to be honest"];

var insertJ = ["I want a woman who has an awesome character even though she is not driven to achieve anything.", "She’s a good person deep inside but has absolutely no motivation to do anything", "Honesty, loyalty and  compassion are a few of her good traits but she’s clueless about what she wants", "She’s kind, generous, reliable and loving but is not motivated to achieve anything in particular"];

var rand1 = insertA[Math.floor(Math.random() * insertA.length)];

var rand2 = insertB[Math.floor(Math.random() * insertB.length)];

var rand3 = insertC[Math.floor(Math.random() * insertC.length)];
var rand4 = insertD[Math.floor(Math.random() * insertD.length)];

var rand5 = insertE[Math.floor(Math.random() * insertE.length)];

var rand6 = insertF[Math.floor(Math.random() * insertF.length)];

var rand7 = insertG[Math.floor(Math.random() * insertG.length)];

var rand8 = insertH[Math.floor(Math.random() * insertH.length)];

var rand9 = insertI[Math.floor(Math.random() * insertI.length)];

var rand10 = insertJ[Math.floor(Math.random() * insertJ.length)];

questions = [
    {
        "question": rand1,
        "variable": ["Physique","Finance"]
    },
    {
        "question": rand2,
        "variable": ["Character","Spiritual"]
    }, 
    {
        "question": rand3,
        "variable": ["Drive","Sex"]
    }, 
    {
        "question": rand4,
        "variable": ["Physique","Spiritual"]
    }, 
    {
        "question": rand5,
        "variable": ["Character","Sex"]
    }, 
    {
        "question": rand6,
        "variable": ["Drive","Spiritual"]
    }, 
    {
        "question": rand7,
        "variable": ["Finance","Character"]
    }, 
    {
        "question": rand8,
        "variable": ["Sex","Physique"]
    },
    {
        "question": rand9,
        "variable": ["Spiritual","Finance"]
    },
    {
        "question": rand10,
        "variable": ["Character","Drive"]
    },
];