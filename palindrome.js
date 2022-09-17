var inputDate = document.querySelector('#input-date');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');


// this function used for reverse string
function reverseStr(str) {
    var listOfChars = str.split(''); // ['c','a','r']
    var reverseListOfChars = listOfChars.reverse();// ['r','a','c']
     var reverseStr = reverseListOfChars.join(''); //rac
     return reverseStr;
}

// console.log(reverseStr('why'));

//compare both simple and reverserd string
function isStringPalindrome(str){
    var reversedString = reverseStr(str);
    return str === reversedString;
}
// console.log(isStringPalindrome("levl"));

function convertdatetostr(date) {
    newDate = {day:'', month:'', year:''};
 
    if (date.day < 10) {
        newDate.day = '0' +  date.day;
    }
    else{
        newDate.day = date.day.toString();
    }
    if (date.month< 10) {
        newDate.month = '0'+ date.month
    }
    else{
        newDate = date.month.toString();

    }
    newDate.year = date.year.toString();
    return  newDate;



}

// var date = {day: 24, month: 2, year: 2020};

// console.log(convertdatetostr(date))