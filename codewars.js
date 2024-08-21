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