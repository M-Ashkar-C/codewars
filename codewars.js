// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)
function multiply(number){
    //your code here
    num = number.toString().split('') ;
    console.log(num)
    if(num[0]=="-"){
        num.shift()
    }
    newnum=num.length
    console.log(newnum);
    pow=newnum
    console.log(pow)
    return number * Math.pow(5,pow)
  }
  console.log(multiply(-3))