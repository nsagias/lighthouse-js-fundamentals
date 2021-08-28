const conditionalSum = function(values, condition) {
  let myArray = [];
  let myTotal = 0;
  if ( condition === "even" ) {
    for ( let i = 0; i < values.length; i++ ) {
      if ( values[i] % 2 === 0 ) {
        myArray.push(values[i] )
      }
    }
  } 
  else if (condition === "odd") {
    for ( let i = 0; i < values.length; i++ ) {
      if ( values[i] % 2 !== 0 ) {
        myArray.push(values[i] )
      }
    }
  }
  for ( let i = 0; i < myArray.length; i++ ) {
    myTotal += myArray[i]
  }
  return myTotal;
};



