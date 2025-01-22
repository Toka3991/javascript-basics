while(true){
    let randomNumber = Math.floor(Math.random()*100)+1
    console.log(randomNumber);

    if (randomNumber % 7 !==0){
        console.log(randomNumber);
        break;
        
    }
    
}