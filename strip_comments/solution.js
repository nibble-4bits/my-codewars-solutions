function solution(input, markers) {
  return input
          .replace(new RegExp(String.raw` +(?=[${markers.join('')}])`, 'gm'), '') // replace spaces before comment markers
          .replace(new RegExp(String.raw`[${markers.join('')}].*`, 'gm'), ''); // replace comment marker and all chars after it
};