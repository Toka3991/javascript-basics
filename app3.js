function maxNum(a, b, c) {
    let largest;
    if(a>b && a>c){
        largest = a
    }else if(b>a && b>c){
        largest = b

    }else{
        largest = c

    }
    return largest
    
}

let a = Number(prompt("enter first number"))
let b = Number(prompt("enter second number"))
let c = Number(prompt("enter third number"))

let findLargest = maxNum(a, b, c)
console.log(findLargest);
