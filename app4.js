function sumOfOddNums(){
    sum=0
    for(let i=1; i<=10; i++){
        if(i%2!=0){
            sum+=i
        }
    }
    return sum
}

let result=sumOfOddNums()
console.log("1დან 10მდე კენტი რიცხვების ჯამია:" +result);
