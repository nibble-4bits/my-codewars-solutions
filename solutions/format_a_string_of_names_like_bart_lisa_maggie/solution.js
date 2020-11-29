function list(names){
  let formattedStr = names.map(x => x.name).join(', ');
  let lastCommaIdx = formattedStr.lastIndexOf(',');
  
  if (lastCommaIdx > -1)
    formattedStr = `${formattedStr.slice(0, lastCommaIdx)} & ${formattedStr.slice(lastCommaIdx + 2)}`;
  
  return formattedStr;
}