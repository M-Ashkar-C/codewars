// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

// function multiply(number){
//     //your code here
//     num = number.toString().split('') ;
//     console.log(num)
//     if(num[0]=="-"){
//         num.shift()
//     }
//     newnum=num.length
//     console.log(newnum);
//     pow=newnum
//     console.log(pow)
//     return number * Math.pow(5,pow)
//   }
//   console.log(multiply(-3))





//   Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//   * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
str='abcde'
result=[]
function solution(str){
for(i=0;i<str.length;i+=2){
    pair=str[i]+(str[i+1]||'_');
    result.push(pair)
}
return result
}
document.write(solution(str))