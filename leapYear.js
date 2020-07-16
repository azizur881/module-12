function leapYear(year){
var check=year%4;
if(check==0){
  return true;
}
else if(year/400==0 && year/100 !==0);{
    return true;
}
}
var finalCheck=leapYear(3880);
console.log(finalCheck);