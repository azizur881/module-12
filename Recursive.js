function factorial(n){
   
   
    if  (n == 0){
        return 1;
    }
    else{ 
        return n*factorial(n-1);
    }
}
var sum = factorial(4)
console.log(sum)