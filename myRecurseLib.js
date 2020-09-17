//Assignment JS.Recursion.0:
let n = prompt("Write a natural number");
function fact(n){ 
  if (n === 0){
    return 1;
 }
  return n * fact(n-1);       
}
console.log(fact(n));


//Assignment JS.Recursion.1:
var fibo = function (n){
  if (n===1){
    return [0, 1];
  } 
  else{
    var s = fibo(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
 console.log(fibo(8));


//Assignment JS.Recursion.2:
var pow = function(r, e){
   if (e === 0){
    return 1;
    }
  else{
    return r * pow(r, e-1);
  }
};
console.log(pow(2, 7));