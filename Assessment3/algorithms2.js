function findMissingNumber(arr) {
    const n = arr.length;

    if (n === 0) {
        return "Error: Empty array";
    }

    for (const num of arr) {
        if (typeof num !== 'number') {
            return "Invalid input, non-numeric values detected";
        }

        if (num < 1) {
            return "Invalid input, negative numbers detected";
        }
    }

    const numSet = new Set(arr);

    let isMissing = false;
    for (let i = 1; i <= n + 1; i++) {
        if (!numSet.has(i)) {
            isMissing = true;
            return i;
        }
    }

    if (!isMissing) {
        return "Nothing is missing";
    }
}

/* 
Time Complexity:
- loop that checks for non-numeric/negative values and 
populates set runs in O(n)
- loop that checks for the missing number also runs in 
O(n), n is the length of the input array
- total time complexity is O(n).

Space Complexity:
- set used to store values in the array is O(n) 
space, in the worst case, all distinct elements of the 
array are stored in the set
- total space complexity is O(n).


This code is functional and easy to understand. It handles different 
error cases and identifies any missing numbers or states that nothing 
is missing. It has a linear time complexity, this is efficient for 
most purposes when the array size is not extremely large.

A more efficient approach could achieves O(n) time without using 
extra space. This could be done by calculating the expected sum 
of the complete sequence of numbers from 1 to n+1 
using the sum formula, and then subtracting the sum of 
the given array. The difference will be the missing number.

expectedSum = (n + 1) * (n + 2) / 2
return
expectedSum - actualSum

- avoids the need for set
- requires fewer operations
*/
