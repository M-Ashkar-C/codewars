// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str,ending){
    return str.endsWith(ending);
}
console.log(solution("abc","bc"));






// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// let arr=[];
// sum =0;
// function positiveSum(arr) {
//     a1=arr.filter(value=>{
//       return value>0
//     })
//      s=a1.reduce((sum,value)=> sum+value,0);
//      return console.log(s)
//   }
//   positiveSum(arr)
 
 




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
// str='abcde'
// result=[]
// function solution(str){
// for(i=0;i<str.length;i+=2){
//     pair=str[i]+(str[i+1]||'_');
//     result.push(pair)
// }
// return result
// }
// document.write(solution(str))





// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// function makeNegative(num) {
//     // Code?
//     if(num>0){
//         let n=-num
//         return n
//     }else{
//         return num
//     }
//   }
//   console.log(makeNegative(-42));
   