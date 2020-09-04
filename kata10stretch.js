
const talkingCalendar = function (date) {
  let newDate = '';
  let array = date.split("/");
  let day = array[2];
  let month = array[1];
  let year = array[0];

  if (month === '01') {
    month = 'January';
  } else if (month === '02'){
    month = "February";
  } else if (month === '03'){
    month = 'March';
  } else if (month === '04'){
    month = 'April';
  } else if (month === '05'){
    month = 'May';
  } else if (month === '06'){
    month = 'June';
  }else if (month === '07'){
    month = 'July';
  } else if (month === '08'){
    month = 'August';
  } else if (month === '09'){
    month = 'September';
  } else if (month === '10'){
    month = 'October';
  } else if (month === '11'){
    month = 'November';
  } else if (month === '12'){
    month = 'December';
  }
  
  
  if (day === '01') {
    day = '1st';
  } else if (day === '02') {
    day = '2nd';
  } else if (day === '03') {
    day = '3rd';
  } else if (day === '21') {
    day = '21st';
  }else  if(day === '22') {
    day = '22nd';
  } else if (day === 23) {
    day = '23rd';
  } else if (day === 31) {
    day = '31st';
  } else {
    day = day + 'th';
  }

 newDate = month + ' ' + day + ', ' + year;
 return newDate;
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
