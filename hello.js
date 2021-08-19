const sayHello = function ( name ) {
  console.log( "Hello, " + name );
}

sayHello("Nick");

// console.log example
const sayHelloToConsole = function ( name ) {
  console.log( "Hello, " + name );
}

// call console.log example with an argument
sayHelloToConsole("Nick");

// return example
const returnSayHello = function ( name ) {
   return "Hello, " + name;
}

// call return example
// assign to greetings variable
const greeting = returnSayHello( "Nick" );

console.log( greeting );