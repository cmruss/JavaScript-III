/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. "Window Binding" the natural state that "this" will reference if left unspecified, will result in a return value of "undefined" unless in 'strict mode' which will cause an error.
 * 2. "Implicit Binding" When invoked "this" will reference the object called to the left of the "." in the invocation. 
 * 3. "New Binding" When working with multiple objects with like properties, the "new" keyword can be used to invoke an object function to create a new object by passing in the values as parameters.
 * 4. "Explicit Binding" This uses the keywords "call", "apply" & "bind" in the invoction to specify the object being referenced. "call" is used to add one argument at a time, while "apply" allows multiple arguments to be passed in. Both immediately invoke the function. "bind" is the same as "call" except instead of invoking the function it returns a new function to be called later.
 *
 * write out a code example of each explanation above
 */

// Principle 1
let catName = function() {
    console.log(`${this.name}`);
};
catName(); // ===> returns 'undefined'
// code example for Window Binding

// Principle 2
let mrW = {
    name: 'Mr. Whiskas',
    greeting: 'Meow.',
    sayHello: function() {
        console.log(this.greeting);
    }
};
mrW.sayHello();
// code example for Implicit Binding

// Principle 3
let Cat = function(name, greeting) {
    this.name = name;
    this.greeting = greeting;
};

let purr = new Cat('Purrsephone', 'Prrraawww...');
console.log(purr);
// code example for New Binding

// Principle 4
function sayHelloTwo() {
    console.log(`${this.greeting} ${this.greeting}`)
}
sayHelloTwo.call(mrW);
let nowTwo = sayHelloTwo.bind(purr);
nowTwo();
// code example for Explicit Binding