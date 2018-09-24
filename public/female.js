var insertA = ["I want a 6ft+ man who can’t provide for my basic needs", "A very well built man is my ideal man. It doesn’t matter if he’s broke", "A broke man is not as broke if you take a close look at his biceps and triceps", "Since I make my own money, his doesn’t matter so long as he is good looking"];
// "variable": ["Physique","Finance"]
  

var insertB = ["I want a brilliant man, it doesn’t matter whether he knows the g in God", "Prayer is overrated. Have sense and a solid character and we’re good", " What’s the point of all-night prayers? If he has a good character, we’re good to go", "I want a solid character. His spiritual life has no bearing on me"];
// "variable": ["Character","Spiritual"]
  

var insertC = ["I want a man who is a go-getter, so what if he’s a 1-minute man in the other room", "He’s really in love with what he does, it doesn't that he can give me an orgasm", "This man is driven to achieve his goals !!! Sex isn't food, we’d be fine without it or just a little", "Sex is overrated. I’d rather have a man who is very ambitious in other things than on the bed"];
// "variable": ["Drive","Sex"]
  
//orgasm isn't a clear question
//pepper them gang is also not a clear question
//7 rating. too predictable. NPS 6. 10-15

var insertD = ["I want a really good looking man. Whether he knows God or not  is not as important", "I want him at least 6 feet, tall and handsome. He doesn't need to pray. I’d do the praying for both of us", "Give me beards I can play with, pacs that I can run my fingers through. His ability to pray is inconsequential", "He has to be really attractive.  I really don’t care about his spiritual life."];
// "variable": ["Physique","Spiritual"]
  

var insertE = ["I want a tiger on the sheets, take me to the highest heavens. Well, about his character, no one is perfect.", "Don’t stop baby. Don’t stop. I know you lied yesterday and your character is constantly in question but just rock me all night long", "Kissing for breakfast, cuddling for lunch and orgasms for dinner. Some lies and other escapades are acceptable", "Kamasutra is our bible. all problems can be solved including his morally bankrupt character after a hot steamy session"];
// "variable": ["Sex","Character"]
  

var insertF = ["I want ambition personified, hard worker. God will understand if he’s too busy", "He is a finisher and highly productive in all areas but spiritual stuff", "If  he’s very driven to achieve goals, I’m not bothered if he prays only once a week or month", "If he puts his mind at anything, consider it done. Thing is he hasn’t exactly put his mind on anything spiritual but I’m cool with that"];
// "variable": ["Drive","Spiritual"]
   

var insertG = ["If he has money and a good amount of it, his character doesn’t really matter", "Money solves all things. I can change his bad character", "Does he have money for my regular vacations and an exquisite wardrobe? We’d deal with the rest later", "I want a really wealthy person. His character can be isn't helped?"];
// variable": ["Finance","Character"]
  
var insertH = ["I want a fit man. Yes he’s not gifted down there but I’m fine with it.", "Our sex life is horrible but he’s physically attractive", "One-minute man is manageable. But have you seen how mind-blowing he looks? I love!!", "His muscles  are good enough for me even if he doesn’t know how to use the man down there."];
// "variable": ["Physique","Sex"]

var insertI = ["I want a very prayerful and godly man.I prefer that to his having money", "He can’t make 10 sentences without mentioning something about the supernatural. That matters more to me than all the money in the world", "He’s very religious and has just enough money", "If there’s any iota of spirituality in it, he’s there and doesn’t have enough money. I have my money"];
// "variable": ["Spiritual","Finance"]

var insertJ = ["I want a man who has an awesome character even though she is not driven to achieve anything.", "He’s a good person deep inside but has absolutely no motivation to do anything", "Honesty, loyalty, and responsibility are a few of his good traits but he’s clueless about what she wants", "A good name is better than everything else including drive and ambition"];
// "variable": ["Character","Drive"]
 

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
    }, {
        "question": rand2,
        "variable": ["Character","Spiritual"]
    }, {
        "question": rand3,
        "variable": ["Drive","Sex"]
    }, {
        "question": rand4,
        "variable": ["Physique","Spiritual"]
    }, {
        "question": rand5,
        "variable": ["Sex","Character"]
    }, {
        "question": rand6,
        "variable": ["Drive","Spiritual"]
    }, {
        "question": rand7,
        "variable": ["Finance","Character"]
    }, {
        "question": rand8,
        "variable": ["Physique","Sex"]
    }, {   
        "question": rand9,
        "variable": ["Spiritual","Finance"]
    }, {
        "question": rand10,
        "variable": ["Character","Drive"]
    },

];