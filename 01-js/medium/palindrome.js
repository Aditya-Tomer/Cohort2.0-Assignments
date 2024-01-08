/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let temp = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let i,n=temp.length;
  for(i=0;i<n/2;++i){
    if(temp[i]!=temp[n-1-i])return false;
  }
  return true;
}

module.exports = isPalindrome;
