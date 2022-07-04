let person = {
    name: "Shatakshi",
    age: 21,
    country: "India"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

let age = 115

if(age<6){
    console.log("free")
}
else if( age < 18){
    console.log("child discount")
}
else if (age<27){
    console.log("student discount")
}
else if(age<67){
    console.log("full price")
}
else{
    console.log("senior citizen discount")
}

let largeCountries1 = ["China", "India", "USA", "Indonesia", "Pakistan"]
console.log("The 5 largest companies in the world are :")
for(let i=0; i<largeCountries1.length; i++){
    console.log(" - " + largeCountries1[i])
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountries2.pop()
largeCountries2.push("Pakistan")
largeCountries2.shift()
largeCountries2.unshift("China")
console.log(largeCountries2)

let dayOfMonth = 13
let weekday = "Friday"
if(dayOfMonth===13 && weekday==="Friday"){
    console.log("😵‍💫")
}

let hands = ["rock", "paper", "scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand())

let fruit = ["🍎","🍊","🍎","🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function shelves(){
    for(let i=0; i<fruit.length; i++){
        if(fruit[i]==="🍎"){
            appleShelf.textContent += fruit[i]
        }
        else{
            orangeShelf.textContent += fruit[i]
        }
    }
}

shelves()


