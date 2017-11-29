function myFunction() { // a function contained in the module
    console.log('Function was called');
}

var myString = 'String!'; // a string contained in the module

module.exports.myFunction = myFunction; // exports the function named, as well as assigns a name to said file.
module.exports.myString = myString; // exports the variable named, as well as assigns a name to said thing.
