const numberOfVowels = function(data) {
  let count = 0;
  let splitData = [];
  splitData = data.split("")
  for ( let i = 0; i < data.length; i++) {
    if (splitData[i] === "a"){
      count += 1
    }
    else if (splitData[i] === "e"){
      count += 1
    }
    else if (splitData[i] === "i"){
      count += 1
    }
    else if (splitData[i] === "o"){
      count += 1
    }
    else if (splitData[i] === "u"){
      count += 1
    }
  }
  return count;
};


