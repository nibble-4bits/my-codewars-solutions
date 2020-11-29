Set.prototype.equals = function(otherSet) {
  if (this.size !== otherSet.size) return false;
  for (const el of this) if (!otherSet.has(el)) return false;
  return true;
}

function findUniq(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let prev = new Set(arr[i - 1].toLowerCase());
    let curr = new Set(arr[i].toLowerCase());
    let next = new Set(arr[i + 1].toLowerCase());
    
    if (!curr.equals(prev) && curr.equals(next)) return arr[i - 1];
    else if (curr.equals(prev) && !curr.equals(next)) return arr[i + 1];
    else if (!curr.equals(prev) && !curr.equals(next)) return arr[i];
  }
}
