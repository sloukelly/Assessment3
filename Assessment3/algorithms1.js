function isPalindrome(str) {
    
    str = str.toLowerCase();
  // concverts to lowercase as to not affect case sensitivity
    
    str = str.replace(/[^a-z0-9]/g, '');
  // gets rid of any unwanted characters
   
    return str === str.split('').reverse().join('');
  }
  // compares reversed string with original
  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("sarah"));   // false
  // test cases to check


/* 
For both the Time and Space complexity of this
function all of the different parts are O(n)
meaning it is a 1:1 ratio, when one part 
increases by one, the algorithm with increase
by 1.

Time Complexity:

- string to lowercase: O(n), n is the length of the input string
- remove other characters: O(n), n is the length of the modified string
- reverse string: O(n), n is the length of the modified string
- join characters: O(n), n is the length of the modified string
- comparison: O(n), n is the length of the modified string

Space Complexity: (very similar to time but not exactly the same)

- lowercase string: O(n), a new string of the same length created
- remove other characters: O(n), a new string is created
- reverse string: O(n), a new string is created
- array during the reversal: O(n), array of characters is created
- join characters: O(n), a new string is created


This algorithm is clear, and easy to understand,
but in terms of algorithms there are more
efficient solutions. To improve it, you could 
compare characters from the beginning and the
end of the string - this could be done using two
pointers. This would use less space that the original,
due to the absence of intermediate strings/arrays.
*/