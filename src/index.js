let numberToBeGuessed=document.querySelector('.number');
let reset=document.querySelector('.again');
let guessedNo=document.querySelector('.guess');
let checkNo=document.querySelector('.check');
let guessedNom=document.querySelector(".guess").value;
let noGuessed=Math.floor((Math.random()*20)+1)
let sco=20;
let mess=document.querySelector(".message")

console.log(guessedNom)
checkNo.addEventListener("click",function(){
    let guessedNom=document.querySelector(".guess").value;
    if(!guessedNom){mess.innerHTML="No Number!!!!!"}
   else if(noGuessed<guessedNom || noGuessed>guessedNom){
        noGuessed<guessedNom ? mess.innerHTML="Too High" : mess.innerHTML="Too Low";
        sco-=1;
        document.querySelector("span").innerHTML=sco;
        
    }
    else if(guessedNom==noGuessed){
        mess.innerHTML="You Guessed Right"
        document.querySelector("span").innerHTML=sco;
        if(document.querySelector(".highscore").textContent>sco){}
        else{document.querySelector(".highscore").textContent=sco}
        
        document.querySelector(".number").textContent=noGuessed;
        document.querySelector("body").classList.add("bggreen");

    }
    guessedNom='';
})
reset.addEventListener("click",function(){
    guessedNom='';
    sco=20;
    document.querySelector("span").innerHTML=20;
    document.querySelector(".guess").value="";
    noGuessed=Math.floor((Math.random()*20)+1);
    document.querySelector(".number").textContent="?";
    mess.innerHTML="Start guessing..."
    document.querySelector("body").classList.remove("bggreen");

})

