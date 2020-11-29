function descendingOrder(n){
  return parseInt(Array.from(n.toString()).sort((a, b) => {
    return b.charCodeAt() - a.charCodeAt();
  }).join(''));
}