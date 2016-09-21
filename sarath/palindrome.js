function isPalindrome(word){
var rev= ""
var warray = word.split('').reverse().join('');
if(rev!==word){
return ('Not Palindrome');
}
else{
return('Palindrome');
}
}
isPalindrome('sass');
