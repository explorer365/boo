 
var insertA = ['Willy the Goblin','Big Daddy','Father Christmas', 'fello', 'juicy'];
var insertB = ['the soup kitchen','Disneyland','the White House'];
var insertC = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

var rand = insertA[Math.floor(Math.random() * insertA.length)];

/* 
var sup = 
randomize.addEventListener('click', result);

//function result() {
    var rand = insertA[Math.floor(Math.random() * insertA.length)];
    //return rand;
//}
*/
//var x = result();

//I want a woman that has the body of a goddess. So what if she’s broke

questions = [
    {
        "question": rand,
        "variable": ["Physique","Finance"]
    },
    {
        "question": "I want a woman who is very intelligent and of good character. It doesn’t matter if she's agnostic",
        "variable": ["Character","Spiritual"]
    }, 
    {
        "question": "I want a highly ambitious woman. It doesn't matter if  cares if we have sex once a month or quarter?",
        "variable": ["Drive","Sex"]
    }, 
    {
        "question": "I want a woman with awesome curves and a pretty face. I'm not so bothered about all the spiritual stuff.",
        "variable": ["Physique","Spiritual"]
    }, 
    {
        "question": "I want a woman of solid character.It doesn't matter if the sex is boring and unexciting",
        "variable": ["Character","Sex"]
    }, 
    {
        "question": "I want a highly ambitious woman. I don't like over religious people",
        "variable": ["Drive","Spiritual"]
    }, 
    {
        "question": "I want a woman who makes a ton of money. Her character isn't important to me",
        "variable": ["Finance","Character"]
    }, 
    {
        "question": "I want a woman who can blow my brains out, not literally. So what if she’s doesn't have the curves",
        "variable": ["Sex","Physique"]
    },
    {
        "question": "I want a woman who would do all the spiritual stuff on my behalf. She can depend solely on me for money",
        "variable": ["Spiritual","Finance"]
    },
    {
        "question": "I want a woman who has an awesome character even though she is not driven to achieve anything.",
        "variable": ["Character","Drive"]
    },
];