//...
console.log(checkPalindrome([1, 2, 3, 2, 1]));

function checkPalindrome(arr) {
  const len = arr.length;
  if (len % 2 == 0) return false; //tjekker om arrayet har et lige/ulige antal

  for (let i = 0; i < len / 2; i++) { //tjekker om tallene er ens op til midterpunktet i arrayet
    if (arr[i] !== arr[len - i - 1] && checkPalindrome(middle)) return false;
  }
  return true;
}