// In this exercise, we will be given an array of 2 or more numbers. 
// We will then have to find the two largest numbers in that array, and 
// sum them together.


const sumLargestNumbers = function( data ) {
  let firstHighest = 0;
  let secondHighest = 0;

  let add = function ( a, b ) {
    return a + b;
  }

  let firstLoopHighest = function ( myArray ) {
    let location = 0;
    for(let i = 0; i < myArray.length; i++) { 
      if ( myArray[i] > location ) {
        location = i
        firstHighest = myArray[i]
      }
    }
    return location;
  }
  let myForLoopValue = function ( myArray ) {
    let value = 0;
    for ( let i = 0; i < myArray.length; i++ ) { 
      if ( myArray[i] > value ) {
        value = myArray[i];
        secondHighest = value; 
      }
    }
    return value;
  }
  let mySplicer = function ( location, myArray ) {
    myArray.splice( location,1 )
    return myArray;
  }
  if ( data.length === 2 ) {
    return data[0] + data[1];
  } 
  else {
    let firstH = firstLoopHighest( data );
    let newArray = mySplicer( firstH, data );
    myForLoopValue( newArray );
    return add( firstHighest, secondHighest );  
  }
}

