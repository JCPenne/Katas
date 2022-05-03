function talkingCalendar (date) {
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let ending = ['st','nd','rd','th'];
  let string = date.split('/');
  let year = string[0];
  let month = months[string[1]-1];
  let day = '0'

  if (string[2][0] === '0') {
    day = string[2].slice(1);
  } else {
    day = string[2]
  };
  
  switch (day) {
    case '1':
    case '21':
    case '31':
    day += ending[0];
    break;
    case '2':
    case '22':
      day += ending[1];
      break;
    case '3':
    case '23':
      day += ending[2];
      break;
    default:
      day += ending[3];
  };


  
  return month + ' ' + day + ', ' + year
};

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/03"));
console.log(talkingCalendar("2007/11/21"));
console.log(talkingCalendar("1987/08/31"));