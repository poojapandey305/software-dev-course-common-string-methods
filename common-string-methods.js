//assignment from Pooja Pandey


let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript");
console.log("Has 'JavaScript':", hasJavaScript);

// 2. Find the position of the word "Coding" in the string using indexOf
let codingPosition = inputString.indexOf("Coding");
console.log("Position of 'Coding':", codingPosition);

// 3. Check if the string starts with "Welcome" using startsWith
let startsWithWelcome = inputString.startsWith("Welcome");
console.log("Starts with 'Welcome':", startsWithWelcome);

// 4. Check if the string ends with "today." using endsWith
let endsWithToday = inputString.endsWith("today.");
console.log("Ends with 'today.':", endsWithToday);

// 2. Transforming
// Convert the string to all lowercase letters using toLowerCase
let lowercaseString = inputString.toLowerCase();
console.log("Lowercase String:", lowercaseString);

// Convert the string to all uppercase letters using toUpperCase
let uppercaseString = inputString.toUpperCase();
console.log("Uppercase String:", uppercaseString);

// Remove the extra spaces from the beginning and end of the string using trim
let trimmedString = inputString.trim();
console.log("Trimmed String:", trimmedString);

// Replace the word "JavaScript" with "coding" using replace
let replacedString = inputString.replace("JavaScript", "coding");
console.log("Replaced String:", replacedString);

// 3. Breaking Apart
let wordsArray = inputString.trim().split(" ");
console.log("Words Array:", wordsArray);

// 4. Retrieving
// Retrieve the first character of the string using charAt
let firstCharacter = inputString.trim().charAt(0);
console.log("First Character:", firstCharacter);

// Extract the word "Bootcamp" using slice
let extractedBootcamp = inputString.slice(18, 27);  // Start from index 18 to 27 (length of "Bootcamp" is 9)
console.log("Extracted 'Bootcamp':", extractedBootcamp);

// Log all results in a single object:
console.log({
  "Has 'JavaScript'": hasJavaScript,
  "Position of 'Coding'": codingPosition,
  "Starts with 'Welcome'": startsWithWelcome,
  "Ends with 'today.'": endsWithToday,
  "Lowercase String": lowercaseString,
  "Uppercase String": uppercaseString,
  "Trimmed String": trimmedString,
  "Replaced String": replacedString,
  "Words Array": wordsArray,
  "First Character": firstCharacter,
  "Extracted 'Bootcamp'": extractedBootcamp
});



//Advanced Challenge
//Write a program to process the following string:
//Customer: John Doe
//Order: Apple, Banana, Grape
//Total: 20.50
//Extract the customer.
//Split the order into an array of items.
//Convert the total price to uppercase (e.g., "TOTAL: $20.50").
//Ans-//
let inputString2 = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;

// Extract the customer name
let customerLine = inputString2.split("\n")[0]; 
let customerName = customerLine.split(": ")[1];

// Extract the order items
let orderLine = inputString2.split("\n")[1];
let orderItems = orderLine.split(": ")[1];

// Extract the total price
let totalLine = inputString2.split("\n")[2];
let totalPrice = totalLine.split(": ")[1];

console.log("Customer Name:", customerName);
console.log("Order Items:", orderItems);
console.log("Total Price:", totalPrice);
