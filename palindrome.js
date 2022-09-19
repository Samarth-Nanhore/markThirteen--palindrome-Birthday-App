var inputDate = document.querySelector('#input-date');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');


// this function used for reverse string
function reverseStr(str) {
    // var listOfChars = str.split(''); // ['c','a','r']
    // var reverseListOfChars = listOfChars.reverse();// ['r','a','c']
     var reverseStr = str.split('').reverse().join(''); //rac

     return reverseStr;
}

//  console.log(reverseStr('why'));

//compare both simple and reverserd string
function isStringPalindrome(str){
    var reversedString = reverseStr(str);
    return (str === reversedString);
}
//  console.log(isStringPalindrome("racecar"));

function convertdatetostr(date) {
   var dateStr = {day:'', month:'', year:''};
 
    if (date.day < 10) {
        dateStr.day = '0' +  date.day;
    }
    else{
        dateStr.day = date.day.toString();
    }
    if (date.month< 10) {
        dateStr.month = '0'+ date.month
    }
    else{
        dateStr.month = date.month.toString();

    }
    dateStr.year = date.year.toString();
    return  dateStr;



}


function getAllDateFormats(date){
  var dateStr = convertdatetostr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}




function checkIsPalindromeForAllDateFormats(date){
  var allDateFormats = getAllDateFormats(date);
  var flag = false;

  for(var i = 0; i < allDateFormats.length; i++){
      if(isStringPalindrome(allDateFormats[i])){
          flag = true;
          break;
      }
  }
  return flag;
}
//  var date = {day: 8, month: 2, year: 2080};
//  var dateStr = convertdatetostr(date);

//  console.log(checkPalindromedateInFormet(dateStr))

//to only get it's leap year or not
function isLeapYear(year){
  if(year % 400 == 0){
      return true;
  }
  if(year % 4 == 0){
      return true
  }
  if(year % 100 == 0){
      return false;
  }
  return false;
}


function getNextDate(date){
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(month != 2){
      if(day > daysInMonth[month - 1]){
          day = 1;
          month++;
      }
      if(month > 12){
          month = 1;
          year++;
      }
  }
  else{
      if(isLeapYear(year)){
          if(day > 29){
              day = 1;
              month++
          }
      }
      else {
          if(day > 28){
              day = 1;
              month++;
          }
      }
  }

  return {
      day : day,
      month : month,
      year : year
  };

}



  function nextPalindromeDate(date){
    var nextDate = getNextDate(date);
    var ctr = 0;

    while(1){
        ctr++;
        var isPalindrome = checkIsPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
          break;
        }
        nextDate = getNextDate(nextDate)
        
    }
    return [ctr, nextDate];
  }
  // var date = {
  //   day: 5,
  //   month: 1,
  //   year: 2020
  // }
  
  // console.log(nextPalindromeDate(date));

button.addEventListener("click", clickHandler);


function clickHandler(e){
  var getinput = inputDate.value;
  // console.log(getinput);
  if(getinput == ''){
    output.innerText ="Please add the date"
  }
  else{
    var dateList = getinput.split('-');
     var date ={
      day: Number(dateList[2]),
      month: Number(dateList[1]),
      year: Number(dateList[0])
     };

     var isPalindrome = checkIsPalindromeForAllDateFormats(date);

     if(isPalindrome){
      output.innerText = "Yup, your birthday is Palindrome!😎"
      output.style.color = "#84cc16";
     }
     else{
      var [counter, nextDate] = nextPalindromeDate(date);
      output.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${counter} days! 😐`;
      output.style.color = "#f43f5e";

    }
     }

  
}














//for study prefrence only


// if (!isPalindrome) {
  //   console.log("no it's not");
  // }
  // else{
  //   console.log("yay it is");
  // }



// function clickHandler(e){
//     var bdayString = inputDate.value;
//     if (bdayString !== '') {
//         var date = bdayString.split('-');
//         var yyyy = date[0];
//         var mm = date[1];
//         var dd = date[2];
    
//         var date = {
//           day: Number(dd),
//           month: Number(mm),
//           year: Number(yyyy)
//         };
//         var dateStr = convertdatetostr(date);
//         var list = checkPalindromedateInFormet(dateStr);
//         var isPalindrome = false;
    
//         for (let i = 0; i < list.length; i++) {
//           if (list[i]) {
//             isPalindrome = true;
//             break;
//           }
//         }
//         if (!isPalindrome) {
//             const [point, nextDate] = nextPalindromeDate(date);
      
//               output.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${point} days.`;

      
//           } else {
//             output.innerText = 'Yay! Your birthday is palindrome!';
//           }
//     }


// }

//     if(bdayString ==" "){
//                 output.innerText = "Please add birthdate"
//              }
// else{
//     var listOfDate  = bdayString.split('-');

//     var date = {
//         day: Number(listOfDate[2]),
//         month: Number(listOfDate[1]),
//         year: Number(listOfDate[0])
//     };
//     // console.log(date);
// var isPalindrome = checkPalindromedateInFormet(date);
//     If()
// }
// }






//     if(bdayString ==" "){
//         output.innerText = "Please add birthdate"
//     }
//     else{
//         var listOfDate = bdayString.split('-');
//         var yyyy = date[0];
//         var mm = date[1];
//         var dd = date[2];
//         var date = {
//             day: Number(dd),
//             month: Number(mm),
//             year: Number(yyyy)
//         };
//          var dateStr = convertdatetostr(date);
//          var list = checkPalindromedateInFormet(dateStr);
//         var isPalindrome = false;

//         for(let i=0; i< list.length; i++){
//             if(list[i]){
//                 isPalindrome = true;
//                 break;
//             }
//         }
//     if(!isPalindrome){
//         coant []
//     }

//     }
// }