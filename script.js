
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#randButt");

window.onload=setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";

}

function randomize(max) {
    
    return Math.floor(Math.random()*max);
}

function randColors() {
    
    var r1 = randomize(256);
    var g1 = randomize(256);
    var b1 = randomize(256);
    var r2 = randomize(256); 
    var g2 = randomize(256); 
    var b2 = randomize(256);
    var randGradient = "linear-gradient(to right, rgb(" + r1 +", " + g1 + ", " + b1 + "), rgb(" + r2 + ", " + g2 + ", " + b2 + "))";
    // var hue1 = "color(rgb (" + r1 +", " + g1 +", " + b1 + "))";    
    // console.log(hue1);

    body.style.background = randGradient;
    // color1.value = hue1;
   
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

=======
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#randButt");

window.onload=setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";

}

function randomize(max) {
    
    return Math.floor(Math.random()*max);
}

function randColors() {
    
    var r1 = randomize(256);
    var g1 = randomize(256);
    var b1 = randomize(256);
    var r2 = randomize(256); 
    var g2 = randomize(256); 
    var b2 = randomize(256);
    var randGradient = "linear-gradient(to right, rgb(" + r1 +", " + g1 + ", " + b1 + "), rgb(" + r2 + ", " + g2 + ", " + b2 + "))";
    // var hue1 = "color(rgb (" + r1 +", " + g1 +", " + b1 + "))";    
    // console.log(hue1);

    body.style.background = randGradient;
    // color1.value = hue1;
   
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randColors);