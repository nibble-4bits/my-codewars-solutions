function hexStringToRGB(hexString) {
  return {r: parseInt(hexString[1] + hexString[2], 16),
          g: parseInt(hexString[3] + hexString[4], 16),
          b: parseInt(hexString[5] + hexString[6], 16)};
}