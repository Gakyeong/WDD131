//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate)
console.log(stepsHtml)
// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(''); // set the innerHTML

// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // return element for new_array
// }[, thisArg])

// ativity2 - map
const grades =  ['A', 'B', 'A']
function takeGpa (grade){
    let points =0;
    if (grade === 'A'){points = 4;}
    else {points =3;}
    return points;
}
const takePonts = grades.map(takeGpa);
document.querySelector('#myList').innerHTML = takePonts.join('');

// 3 -reduce
const takePoints = grades.map(takeGpa);
const reduceGpa = takePoints.reduce(function (total, item){
    return total + item;
})

const gpa= reduceGpa /takePoints.length;
document.querySelector('#myList').innerHTML =gpa;
