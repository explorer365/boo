import './male';

function prev_question() {
    if (prev_answer == null) {
        return;
    }
    qn--;
    econ -= prev_answer * questions[qn].effect.econ;
    dipl -= prev_answer * questions[qn].effect.dipl;
    govt -= prev_answer * questions[qn].effect.govt;
    scty -= prev_answer * questions[qn].effect.scty;
    prev_answer = null;
    init_question();

}
function calc_score(score,max) {
    return (100*(max+score)/(2*max)).toFixed(1)
}
function results() {
    location.href = `results.html`
        + `?e=${calc_score(econ,max_econ)}`
        + `&d=${calc_score(dipl,max_dipl)}`
        + `&g=${calc_score(govt,max_govt)}`
        + `&s=${calc_score(scty,max_scty)}`
}

// Intialize variables
var qn = 0; // Question number
var prev_answer = null;
init_question();


class Survey {
constructor(){
    this.options = {
        Physique : 0,
        Finance : 0,
        Character : 0,
        Spiritual : 0,
        Drive : 0,
        Sex : 0,
    }
    this.total = [];
}

/**
 * 
 * @param {array} x 
 * @param {array} y 
 */
setOptions(x,y){
    this.options[x[0]] += x[1];
    this.options[y[0]] += y[1];
    this.total[--qn] = (x,y);
}
changeOptions(){
    // get value at qn
    const value = this.total[qn];

    let test = this.options.value[0][0] ;
    this.options[y[0]] -= y[1];
}
}

/**
* Initialization
* 
*/

// Initialize questions
function init_question () {
document.getElementById("question-text").innerHTML = questions[qn].question;
document.getElementById("question-number").innerHTML = "Question " + (qn + 1) + " of " + (questions.length);
if (prev_answer == null) {
    document.getElementById("back_button").style.display = 'none';
    document.getElementById("back_button_off").style.display = 'block';
} else {
    document.getElementById("back_button").style.display = 'block';
    document.getElementById("back_button_off").style.display = 'none';
}

}

// Initialize object
const compile = new Survey;

// get the click
const nextQuestion = (arr)=>{
const variable = questions[qn].variable;
compile.setOptions([variable[0],arr[0]],[variable[1],arr[1]]);

qn++;
prev_answer = arr;
if (qn < questions.length) {
    init_question();
} else {
    results();
}
}
const prevQuestion = () => {
if (prev_answer == null) {
    return;
}
qn--;

compile.changeOptions()

prev_answer = null;
init_question();

}
// get the largest 2
// convert them back to the original options