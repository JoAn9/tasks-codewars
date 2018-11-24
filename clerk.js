/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

function tickets(peopleInLine) {
	let counter25 = 0;
	let counter50 = 0;
	for (let person of peopleInLine) {
		if (person === 25) {
			counter25++;
		}
		if (person === 50) {
			counter50++;
			counter25--;
		}
		if (person === 100) {
			if (counter50 > 0) {
				counter50--;
				counter25--;
			} else {
				counter25 -= 3;
			}
		}
		if (counter25 < 0 || counter50 < 0) {
			console.log('nie mam wydać');
			return 'NO';
		}
	}
	console.log('udalo sie wszystkim wydac');
	return 'YES';
}

const people = [25, 50, 25, 100, 25, 50, 25];
tickets(people);
