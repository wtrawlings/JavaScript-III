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
const tome = {
    pages: 100,
    cover: "hard",
}
console.log(tome.pages) //in this case TOME object is at the left of the dot
console.log(this); // THIS is accessing the CONSOLE because console is the object to the left of the DOT.

// Principle 3

// code example for New Binding
function Book(attr) {
    this.title = attr.title;
    this.author = attr.author;
    this.subject = attr.subject;
    this.present = function() {
        console.log('our new book is ${this.title} by ${this.author}.');
    }
}
const hobbit = new Book { title: "the Hobbit", author: "Tolkein", subject: "Fantasy" };
// Principle 4

//code example for Explicit Binding
function BookSet(name, price) {
    this.name = name;
    this.price = price;
}

function Comic(name, price) {
    BookSet.call(this, name, price);
    this.category = 'Comic';
    console.log(`${this.name} for ${this.price}`);
}

console.log(new Comic('x-factor', 5).name);
console.log(new Comic('x-men', .25).price);