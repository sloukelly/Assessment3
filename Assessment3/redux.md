1.1.  <br>
The code defines the initial state object with 'value' which is 0. A function is defined 'countReducer' and takes in two parameters, state and action. Within the function, it checks the action type, if it has an increment, it creates and returns a new state object with the original value incremented by 1. If the actions type is not increment, it returns the current and unchanged state. 

1.2.  <br>
const initialState = {  <br>
  value: 0  <br>
};  <br>

function countReducer(state =   initialState, action) {  <br>
  if (action.type === 'increment') {  <br>
    return {  <br>
      value: state.value + 1  <br>
    };  <br>
  }  <br>
  if (action.type === 'decrement') {  <br>
    return {  <br>
      value: state.value - 1  <br>
    };  <br>
  }  <br>
  return state;  <br>
}  <br>

1.3.  <br>
const initialState = {  <br>
  value: 0  <br>
};  <br>

function countReducer(state =   initialState, action) {  <br>
  if (action.type === 'increment') {  <br>
    return {  <br>
      value: state.value + 1  <br>
    };  <br>
  }  <br>
  if (action.type === 'decrement') {  <br>
    return {  <br>
      value: state.value - 1  <br>
    };  <br>
   if (action.type === 'reset') {  <br>
    return initialState;  <br>
  }  <br>
  return state;  <br>
}  <br>

2.1.  <br>
The given code is a React functional component called 'ClassInfo', which uses the useState hook from React to manage the number of students in a classroom. It start by declaring the 'ClassInfo' component with an arrow function. Inside the component body, useState hook defines a piece of state called 'studentsCount', with an initial value of 0. 'setStudentsCount' is a state updated function which will modify 'studentsCount' state. A div element is then rendered with a paragraph displaying the current number of students in the classroom using 'studentsCount' state. A button element is also rendered with text 'Add Student', 'onClick' is currently incomplete and requires an event handler to be defined. 

2.2.a.  <br>
1. Create an array of student objects:  <br>
   students = [  <br>
     { name: "Nrupul", present: false },  <br>
     { name: "Prateek", present: true },  <br>
     { name: "Jane", present: true },  <br>
     { name: "Paul", present: false },  <br>
     { name: "Luke", present: true }  <br>
   ]  <br>

2. Initialise studentsCount state variable to 0
   studentsCount = 0

3. Define function called addStudent:
   function addStudent():
     1. Count the number of students that are in:
        totalPresentStudents = Count students where student.present is true

     2. Update studentsCount state with the totalPresentStudents:
        set studentsCount = totalPresentStudents

4. Render the component:
   Render with a div containing:
     - Text "Number of students in class room: " followed by studentsCount
     - A button with the text "Add Student" and an onClick attribute set to call addStudent

5. When the "Add Student" button is clicked:
   - The addStudent function is called
   - The total number of present students is calculated by filtering the students array
   - The studentsCount state is updated with the new count

6. The component re-renders with the updated studentsCount


2.2.b. 
To ensure that a function is triggered when a button is clicked in React you have to set the 'onClick' attribute of the button elemenet to the function that you want to call. In the given code, the 'onClick' attribute of the '<button>' element is set to the 'addStudent' function, so when 'Add Student' button is clocked, the function is called, updating the 'studentsCount' state. 

2.2.c.
On the first render the 'studentsCount' state gets initialised to 0. 'addStudent' function is created to update 'studentCount' based on the number of present students. Inside the 'addStudent' function, 'students' array is filtered through to count the number of students with 'present' = 'true', the count of present students gets calculated using '.length' property on the array, 'setStudentsCount' function gets called with the caculated count, updating the 'studentsCount' state with a new value. 'onClick' attribute of 'Add Student' is set to the addStudent function, meaning that when the button is clicked, the function will be executed. When 'addStudent' function is executed, this will recalculate the count of present students and update 'studentsCount' state with the new count, this state update then re-renders the component displaying the value of 'studentsCount'.

3.1. 
The code managers a number value in the state. When the action 'increment' runs with a 'payload' (a number), the reducer increases the state value by the 'payload' amount and returns the updated state. If it was a different action type, the reducer would return the current state unchanged. 'increment' allows you to control and change the value in state with different payload values. 

3.2.
To do this you need to integrate with the React component and the Redux store. To do this you can create an Action Creator - a function that returns an action 'increment' and a payload containing the student count. 

Then in the React component, 'useDispatch' hook can be used from 'react-redux' to get access to the dispatch function. When the button is clocked, we can dispatch the increment with the student count as the payload.

The reducer code would actually stay the same as it's already suited for the increment action with a payload. 

3.3.
Figure 4 correctly handles the increment action and updates state as expected - the reducer properly incremement the 'state.value' by adding 'action.payload' value, therefore updating state to reflect total number of students. Whereas figure 5 replaces the value in state with the payload value, which is not an accurate way to use increment operations.


Algorithms1.  <br>
Please see accompanying JS file for code and description below:  <br>
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


Algorithms2.  <br>
Please see accompanying JS file for code and description below:  <br>
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

expectedSum = (n + 1) * (n + 2) / 2  <br>
return  <br>
expectedSum - actualSum  <br>

- avoids the need for set
- requires fewer operations
