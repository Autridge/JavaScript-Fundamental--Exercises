// 8 kyu
// Is it a palindrome?

function isPalindrome(x) {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase();
}
