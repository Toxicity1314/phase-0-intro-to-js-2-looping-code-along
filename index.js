// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i= 0; i , i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    //return gifts;
}
function writeCards(name, event){
    const newArray =[]
    for (let i=0; i < name.length; i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

    }
    return newArray
}
wrapGifts(gifts);
console.log(writeCards(["charlie", "Samip", "Ali"], "birthday"))

function countDown(num){
    while(num >=0){
        console.log(num)
        num--
    }
}
countDown(10)