var a=prompt("Which Country is the biggest?").toLowerCase();
var score=0;
if(a=="russia"){
score=score+5;
alert("(1) your answer is right"+ score);

}

else{
score=score-5;

alert("(1)your answer is wrong its Russia score="+score);
}
var b=prompt("which is the fastest animal").toLowerCase();

if(b=="cheetah"){
score=score+5;
alert("(2)your answer is right"+score);
}
else{
score=score-5;
alert("(2)your answer is wrong. the answer is cheetah."+score);
}
var c=prompt("from which animal race did humans evolve?").toLowerCase();

if(c=="monkey"){
score=score+5;
alert("(3)your answer is right"+score);
}
else{
score=score-5;
alert("(3)your answer is wrong. the answer is monkey."+score);
}
var d=prompt("which is worlds most tallest building?").toLowerCase();

if(d=="burj khalifa"){
score=score+5;
alert("(4)your answer is right"+score);
}
else{
score=score-5;
alert("(4)your answer is wrong. the answer is Burj Khalifa."+score
);
}
var e=prompt("Indias most rich person?").toLowerCase();

if(e=="mukesh ambani"){
score=score+5;
alert("(5)your answer is right"+score);
}
else{
score=score-5;
alert("(5)your answer is wrong. the answer is Mukesh Ambani."+score);
}
var f=prompt("Indias most successful captain?").toLowerCase();

if(f=="mahendra singh dhoni"){
score=score+5;
alert("(6)your answer is right"+score);
}
else{
score=score-5;
alert("(6)your answer is wrong. the answer is Mahendra Singh Dhoni."+score);
}
var g=prompt("where is Taj Mahal located ?").toLowerCase();

if(g=="agra"){
score=score+5;
alert("(7)your answer is right"+score);
}
else{
score=score-5;
alert("(7)your answer is wrong. the answer is Agra."+score);
}
document.write(score);
