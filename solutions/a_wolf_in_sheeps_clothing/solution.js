function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') return 'Pls go away and stop eating my sheep';
  
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] === 'wolf') return `Oi! Sheep number ${queue.length - (i + 1)}! You are about to be eaten by a wolf!`;
  }
}