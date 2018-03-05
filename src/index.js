module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var oddSameBracket = false;
  for (var i = 0; i < str.length; i++)
  {
    for (var j = 0; j < bracketsConfig.length; j++)
    {      
      if (bracketsConfig[j][0] == bracketsConfig[j][1] == str[i]) 
      {
        switch(oddSameBracket)
        {
          case false:
            stack.push(j);
            break;
          case true:
            if (stack.pop() != j)
              return false; 
              break;            
        }     
        oddSameBracket = !oddSameBracket;
        continue;
      }                 
      if (str[i] == bracketsConfig[j][0]) //starting bracket
      {
        stack.push(j);
        continue;
      }
      if (str[i] == bracketsConfig[j][1]) //ending bracket
        if (stack.pop() != j)
         return false;    
    }
  }
  if ((stack.length > 0)||(oddSameBracket)) return false; 
  return true;
}
