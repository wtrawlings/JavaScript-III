/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global: THIS is the Javascript object built into the WINDOW/CONSOLE
 * 2. Implicit: the object to the left of the DOT is what THIS is talking about like CONSOLE in console.log
 * 3. NEW: when we have a Function that makes a object- the NEW object is what THIS is referreing to
 * 4. Explicit: using CALL or APPLY forces you to spell out what THIS is in the implicit format
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
console.log(this);
// THIS is accessing the CONSOLE because we didn't tell it a context.

// Principle 2
// code example for Implicit Binding
console.log(this);
// THIS is accessing the CONSOLE because console is the object to the left of the DOT.

// Principle 3

// code example for New Binding
function book(title, author, subject) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    console.log('${this.title} by ${this.author}');
}
// Principle 4

// code example for Explicit Binding