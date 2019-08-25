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
    title: "Awesome Book!",
    pages: 100,
    cover: "hard",
    sayAuthor: function(name) {
        console.log(`${this.title} my book is ${name}`);
        console.log(this);
    }
};
tome.sayAuthor("Warren"); //calling the function the THIS refers to the object which is to the left of the DOT. In this case TOME
console.log(this); // THIS is accessing the CONSOLE because console is the object to the left of the DOT.

// Principle 3

// code example for New Binding
function Book(title, author, subject) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.present = function() {
        console.log(`our new book is ${this.title} by ${this.author}.`);
    }
}
const hobbit = new Book("the Hobbit", "Tolkein", "Fantasy");
hobbit.present();

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
const xMen = new Comic("x-men", 2.50)
console.log(xMen); // construct the X-Men Comic (BookSet) with a category of Comic