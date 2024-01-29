function ipToNum(ip) {
  const bytes = ip.split('.');
  const shifts = [24, 16, 8, 0];
  let sum = 0;
  
  for (let i = 0; i < bytes.length; i++) {
    const byte = parseInt(bytes[i]);
    sum += byte << shifts[i] >>> 0;
  }
  
  return sum;
}

function numToIp(num) {
  const shifts = [24, 16, 8, 0];
  const bytes = [];
 
  for (let i = 0; i < shifts.length; i++) {
    const byte = (num & (255 << shifts[i])) >>> shifts[i];
    bytes.push(byte);
  }
  
  return bytes.join('.');
}