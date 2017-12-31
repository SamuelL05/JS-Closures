
// Closures
// A closure is a function that makes use of variables defined in outer functions
// that have previously returned.

// ****Closures are JavaScripts workaround to having private variables.****

window.onload = function() {

    // Simple Example
    function outer() {
        var start = "Closures are";

        // In order for this to work properly the inner function must
        // be the outer functions return statement.
        return function inner() {

            // inner function making use of 'start' is what makes
            // this an example of closure.
            return start + " " + "awesome";
            // If an inner function does not make personal use of
            // an outer function's variables, the inner function will not have
            // access to them.
        }
    }
    console.log(outer()());

    // Private variable example
    function counter() {
        var count = 0;
        return function inner() {
            count++;
            return count;
        }
    }

    var counter1 = counter();
    console.log(counter1);  // Will write to console the code contained in counter() function.
    console.log(counter1());
    console.log(counter1());

    var counter2 = counter();
    console.log(counter2());
    console.log(counter2());


    // Private variable manipulation
    function classRoom() {

        var instructors = ["Elie", "Colt"];
        return {
            getInstructors: function(){
                // Returns a copy of the original string array.
                // Thus, preventing alteration of the private variable
                // when executing code such as...
                // classRoom().getInstructors().pop();
                return instructors.slice();
            },
            addInstructors: function(instructor){
                instructors.push(instructor);
                return instructors.slice();
            }
        }
    }

    var course1 = classRoom();
    console.log("Original: " + course1.getInstructors());
    console.log("Attempt To Manipulate: " + course1.getInstructors().pop());
    console.log("Final: " + course1.getInstructors());
}