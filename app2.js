while(true){
    let randomNumber=Math.floor(Math.random()*10)+1
    if (randomNumber%2!==0){
        continue
    }
    console.log(randomNumber);
    break
    
}