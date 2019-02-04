/*array = a single variable used to store different elements; list of variable elements
syntax:
var arrayName = ["element", "element", 1, 2];
*/

var myfavs = ["reading", "sleeping", "hiking"];

console.log(myfavs[2]);


//1. Create an array listing ingredients to your favorite recipe.  
//Name your array the recipe name.

var bananapancakes = ["banana", "eggs", "baking soda"];

//2. Create an array listing the classes you are taking this semester.
//Name your array "SpringSem19"

var SpringSem19 = ["MHH", "French 2", "WebDev"];

//3. Create an array listing your favorite all time movies.
//Name your array "FaveMovies"

var FaveMovies = ["The Martian", "Inception", "Dark Knight"];

//4. Create an array listing any other "favorites" you have.
//Name your array the category it is.

var favBooks = ["The Martian", "The Book Thief"];

//5. Access the second element in your recipe array and print it as part of the following sentence 
//"The second ingredient to my favorite recipe is ________."

console.log("The second ingredient to my favorite recipe is " + bananapancakes[1] + ".");

//6. Access the third element in your class list array and print it as part of the following sentence 
//"One of the classes I'm taking this semester is ________."

console.log("One of the classes I'm taking this semester is " + SpringSem19[2] + ".");

//7. Access the first element in your movie list array and print it as part of the following sentence 
//"One of my favorite movies is ________."

console.log("One of my favorite movies is " + FaveMovies[0] + ".");

//8. Access the first element in your last  array and print it as part of the following sentence 
//"One of my favorite __(fill in)__ is ________."

console.log("One of my favorite books is " + favBooks[0] + ".");
