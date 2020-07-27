// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Solution 3 - Recursive approach


function repeatStringNumTimes(str, num) {                               //1
    // console.log(str, num);                                           //1.1
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';     //2
}

console.log(repeatStringNumTimes("Om", 9));


// Notes
/*/

The Solution above can also be written in the form of an if/else expression (Example below). The above use of the ternary operator uses the same logic as an if/else expression but it is written in a more condensed format. 

    //1     Initializes function that takes in two arguments: One being a string and the other an integer. 
                -The Sample Data to be multiplied (string);
                -The Multiplier (num)

    //1.1 -
                Om 9
                Om 8
                Om 7
                Om 6
                Om 5
                Om 4
                Om 3
                Om 2
                Om 1

    //2 -   This section can be broken down as follows

            `return num > 0 ?`  

            The above line represents the if condition. It is equivalent to the if line (//A.2) below. 
 
            `str + repeatStringNumTimes(str, num - 1)` 

            The above line represents the action that should take place as long as the if condition is true
            This is also where the recursion takes place as the function is calling itself to create behaviour similar to that of a loop. 

            This recursive call is dependent on the `num - 1` as each time the recursion happens the num input of 9 in this case is decremented until it reaches the base case which is `num > 0`
            This can be seen visually in //1.1. 

            In order for recursion to work properly it must have a base case otherwise it will end up in an infinite loop. 

            This recursion will add the `str` in the recursive call to the existing `str` and it will accumulate based on the num input (9 in this case)

            `:`

            The colon in this line represents to else condition in the ternary operator and this code will execute when the base case has been reached. (num > 0)


            `'';`

            The accumulated string has been captured in `str` and is stored inside this empty string and returned  by the return keyword.

---------------------------------------------------------------------------------------------------------------------------
EXAMPLE A           
---------------------------------------------------------------------------------------------------------------------------

// Solution three written in if/else format                  Example A

// function repeatStringNumTimes(str, num) {                 //A.1
//     if (num > 0) {                                        //A.2
//         console.log(str, num);                            //A.2.1
//         return str + repeatStringNumTimes(str, num - 1)   //A3
//     } else {                                              //A4
//         return '';                                        //A5
//     }
// };

// console.log(repeatStringNumTimes("Om", 9));

  // "Never give up and good luck will find you."
  // -- Falcor
                                */