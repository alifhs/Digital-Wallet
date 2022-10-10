// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("What's your name?", name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

// var isPalindrome = function (x) {
//   let str = '';
//   let char;
//   let remainder;
//   while (x) {
//     char = x % 10;
//     // console.log(char);
//     str += char.toString();
//     x = parseInt(x / 10);
//   }

//   let revStr = str.split('').reverse().join('');

//   return revStr == str;
// };

// isPalindrome(121);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let mBrackets = {'(': ')', '{': '}', '[': ']'};

  let strLen = s.length;
  let stack = [];
  for (let i = 0; i < strLen; i++) {
    if(mBrackets[stack[stack.length - 1]] == s[i]) {
       stack.pop();
   } else {
       stack.push(s[i])
   }
 }

  // console.log('stack', stack);
  // console.log('stack', stack[-1]);

  return stack.length == 0;
};

isValid('{[]}')


