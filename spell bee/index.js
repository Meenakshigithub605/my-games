let word;
// list of words for spell bee 
const words=["aberration","abstemious","acumen","alacrity","amalgamate","amenable","anachromism"];
document.getElementById('btn').addEventListener('click',function(){
    num=Math.floor(Math.random()*(7));//for order of spell bee words in place of 7  write the no. of words in above array
    word=words[num];

    let voice=new SpeechSynthesisUtterance();
    voice.text=word;
    speechSynthesis.speak(voice);
});
document.getElementById('submit').addEventListener('click',function(){
    if(document.getElementById('inp').value==word){
        alert("CORRECT!!!");
    }
    else{
        alert(`INCORRECT!!! it was ${word}`);
    }
    document.getElementById('inp').value='';
});
document.getElementById('speak').addEventListener('click',function(){
    let voice=new SpeechSynthesisUtterance();
    voice.text=word;
    speechSynthesis.speak(voice);
})