function dataReverse(data) {
  let captGroups = '';
  for (let i = data.length / 8; i > 0; i--) captGroups += `$${i}`;
  return data
          .join('')
          .replace(new RegExp('(\\d{8})'.repeat(data.length / 8)), captGroups)
          .split('')
          .map(Number);
}