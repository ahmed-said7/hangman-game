let letters="abcdefghijklmnopqrstuvwxzy";
let time=new Date();
console.log();
let array=Array.from(letters);
array.forEach((letter)=>{
    let span=document.createElement("span");
    let text=document.createTextNode(letter);
    span.appendChild(text);
    span.className="span-let"
    let letters=document.querySelector(".letters");
    letters.appendChild(span);
})
let object={
    "programming":["php","c++","python","java script","html","css"],
    "framework":["vue js","node js","angular"],
    "famous people":["leo messi","cristiano ronaldo","neymar","mohamed salah","modric"],
    "games":["pubjy","free fire","subway","pes","fifa"],
    "engineering":["computer and control","mechanical ","electrical","mecatronics"]
};
let keys=Object.keys(object);
let randomkey=Math.floor(Math.random()*keys.length);
let prop=object[keys[randomkey]];
let word=prop[Math.floor(Math.random()*prop.length)];
console.log(word);
let spanele=document.querySelector(".game-info .catejory span");
spanele.innerHTML=keys[randomkey];
let fill=document.querySelector(".letters-guess");
let arrayofwords=Array.from(word);
arrayofwords.forEach((ele)=>{
    let fillspan=document.createElement("span");
    fill.appendChild(fillspan);
    if (ele===" "){
        fillspan.className="space"
    }
});
let draw=document.querySelector(".the-draw")
let wrongattempts=0;
let spanfill=document.querySelectorAll(".letters-guess span")
let span_clicked=document.querySelector(".row .letters span");
    document.addEventListener("click",function(e){
        let status=false;
        if(e.target.className="span-let"){
            // let  status=false;
            e.target.classList.add('unactive');
            let value=e.target.innerHTML;
            arrayofwords.forEach(function(elem,index){
                if (elem === value){
                    status=true;
                    spanfill.forEach(function(span,spin){
                        if(spin===index){
                        span.innerHTML=value
                        }});}; });}
                    if(status===false){
                        ++wrongattempts;
                        draw.classList.add(`wrong-${wrongattempts}`);
                        console.log(draw);
                        if(wrongattempts==8){
                            endgame();
                            document.querySelector(".container").classList.add("unactive");
                        }
                    }else{
                        
                    }
                    });
function endgame(){
    let newele=document.createElement("div");
    let text=document.createTextNode(`game over the word is ${word}`)
    newele.appendChild(text);
    newele.className="popup";
    document.body.appendChild(newele);
}