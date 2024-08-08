let array = [ 'Yura', 'Igor', 567, 'Evgen', true, false, 'Summer', 'Dima', 'Oleg', 'Vitalik'];
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])
//
let book1={
    title: 'Dont force yourself',
    pageCount:500,
    genre:'self-development'
}
console.log(book1)
let book2={
    title: 'Thinking is fast and slow',
    pageCount:300,
    genre:'self-development'
}
console.log(book2)
let book3={
    title: 'Steal like an artist',
    pageCount:250,
    genre:'self-development'
}
console.log(book3)
//
let book4={
    title: '7 Habits of Highly Effective People',
    pageCount:750,
    genre:'self-development',
    authors: [
      { name: 'R.Covey',
        age: 52 },
    ]
}
console.log(book4)
let book5={
    title: 'Man in search of true meaning',
    pageCount:550,
    genre:'self-development',
    authors:[
        {
            name:'Viktor Frankl',
        age:63}
        ]
}
console.log(book5)
let book6={
    title: 'Atomic habits',
    pageCount:250,
    genre:'self-development',
    authors:[
        {
        name:'James Clear',
        age:58}
        ]

}
console.log(book6)
//
let users =[
    {name:'Yura',username:'Cqweer',password:1234},
    {name:'Igor',username:'Asasda',password:8976},
    {name:'Oleg',username:'clg',password:7565548465},
    {name:'Vitya',username:',clsd',password:255123},
    {name:'Ignat',username:'glyth',password:3255},
    {name:'Nazar',username:'lfrewr',password:95},
    {name:'Dima',username:'fdnyut',password:1290849042},
    {name:'Taras',username:'rtejngv',password:3216885},
    {name:'Bogdan',username:'Ooirjet',password:646531},
    {name:'Olena',username:'asdd',password:1846473}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
//
let temp=[
    {day:1, morning:10, afternoon:15, evening:12},
    {day:2, morning:13, afternoon:17, evening:13},
    {day:3, morning:8, afternoon:14, evening:10},
    {day:4, morning:15, afternoon:20, evening:13},
    {day:5, morning:12, afternoon:18, evening:14},
    {day:6, morning:9, afternoon:12, evening:10},
    {day:7, morning:8, afternoon:10, evening:8},
]
console.log(temp)
//
let x = 5;
if (x != 0) {
    console.log('Вірно');
}else{
    console.log('Невірно');
}
//
a = 1;
if (a != 0) {
    console.log('Вірно');
}else{
    console.log('Невірно');
}

a = 0;
if (a != 0) {
    console.log('Вірно');
}else{
    console.log('Невірно');
}

a = -3;
if (a != 0) {
    console.log('Вірно');
}else{
    console.log('Невірно');
}
//

let time = 20;

if (time >= 0 && time <= 14)
{
    console.log("Перша четверть");
}else if (time >= 15 && time <= 29)
{
    console.log("Друга четверть");
}else if (time >= 30 && time <= 44)
{
    console.log("Третя четверть");
}else if (time >= 45 && time <= 59)
{
    console.log("Четверта четверть")}
//
let day = 1
switch (day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}
//
let y = 0;
y = y || 'default';
console.log(y);
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if(coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if(coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if(coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if(coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}
if(coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}
//
