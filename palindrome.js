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


function  dateInFormet(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.day + date.month + date.year;
    var yyyyddmm = date.day + date.month + date.year;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.day + date.month + date.year.slice(-2);
    var yyddmm = date.year.slice(-2)+ date.day+ date.month;

    return[ddmmyyyy,mmddyyyy,yyyyddmm,ddmmyy,mmddyy,yyddmm];
}



 




 function checkPalindromedateInFormet(date) {
    var dateFormatList = dateInFormet(date);
    var palindromeList = [];
for (let index = 0; index < dateFormatList.length; index++) {
    var result = isStringPalindrome(dateFormatList[index]);
    palindromeList.push(result)
    
}
return palindromeList;
    
 }

//  var date = {day: 8, month: 2, year: 2080};
//  var dateStr = convertdatetostr(date);

//  console.log(checkPalindromedateInFormet(dateStr))

//to only get it's leap year
function isLeapYear(year) {

    if (year % 400 === 0)
      return true;
  
    if (year % 100 === 0)
      return false;
  
    if (year % 4 === 0)
      return true;
  
    return false;
  }


  function nextDate(date){
    var day = date.day + 1; // we want next date
    var month = date.month;
    var year = date.year;

    var daysInMonth =[31,28,31,30,31,30,31,31,30,31,30,31];
    
    //only for february
    if(month ===2){
        if(isLeapYear(year)){
            if(day>29){
                day=1;
                month=3;
            }
        }
        else{
            if(day > 28){
                day = 1;
                month =3;
            }
        }
    }
      else{
        if(day>daysInMonth[month -1]){
            day=1;
            month++;
        }
      }
      if(month>12){
        month = 1; //for next year
        year++;
      }
      return{
        day: day,
        month: month,
        year: year
      }

  }


  function nextPalindromeDate(date){
    var nexDate = nextDate(date);
    var point = 0;

    while(1){
        point++;
        var dateStr = convertdatetostr(nexDate);
        var resultList = checkPalindromedateInFormet(dateStr);

        for(let i = 0; i< resultList.length; i++){
            if(resultList[i]){
                return [point, nexDate];
            }
        }
        nexDate = nextDate(nexDate);
    }
  }
  var date = {
    day: 5,
    month: 1,
    year: 2020
  }
  
  console.log(nextPalindromeDate(date));