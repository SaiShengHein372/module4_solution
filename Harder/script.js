var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<names.length;i++){
    var firstLetter=names[i].charAt(0).toLowerCase();
    if(firstLetter==="J" || firstLetter==="j"){
        byeSpeaker.speak;
    }
    else{
        helloSpeaker.speak;
    }
}