const urlEncode = function(text) {
  let trimText= text.trim();
  let splitText = trimText.split("");
  let newTextArr = [];
  let encoded = "";
  for (let i = 0; i < splitText.length; i++){
    if( splitText[i] === " " ) {
      newTextArr.push("%");
    }
    else  {
      newTextArr.push( splitText[i] );
    }  
  }
  encoded = newTextArr.join("")
  return encoded;
};

