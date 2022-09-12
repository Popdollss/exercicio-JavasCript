const daysText = prompt ('escreva sua idade em dias');
const days = Number (daysText);

const years = totalDays/365;
const months = (totalDays%365)/30;
const days2 = (totalDays%365)%365%

console.log (`totalYears,${years}, totalMonths ${months}, totalDays ${days}`);

