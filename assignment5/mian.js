//Say you would like to write a program that doubles the 
//odd numbers in an array and throws away the even number.

//1

let numbers = [1, 2, 3, 4, 5];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {

        newNumbers.push(numbers[i] * 1);
    }
}
console.log("the double numbers are", newNumbers);

// Useing filter //

var odd = numbers.filter(i => i % 2 !== 0);


console.log(odd);

//Useing map//

newNumbers = odd.map(i => i * 2);

console.log(newNumbers);

//2//

let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);

console.log(tasks);


tasks.forEach(function (task) {
    task.duration = task.duration / 60;
    return tasks;
});
console.log(tasks);


let theHoures = tasks.filter(task => task.duration >= 2)

console.log(theHoures);

let worth = 15;

let theTime = theHoures.map(function(task){
 return task.duration * worth ;
})
 
console.log(theTime);

  


 const theWorth = theTime.reduce(function(f,i) {
     return f+i;
 });
 console.log(`my total payment amount is ${theWorth} €`);
