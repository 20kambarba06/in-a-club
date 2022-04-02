let you_want = prompt(`How many people will enter the club?`)
let who = confirm(`Does your name begin with an A/a ?`)
let age = prompt('How old are you?')
let money = prompt(`How much money do you have?`)




if (age >= 20 && age <= 40 && money >= 100 && you_want >= 0 && you_want <= 10 && who === true) {
    console.log('welcome');
} else {
    console.log(`Close your eyes`);
}