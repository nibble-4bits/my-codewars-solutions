function ipsBetween(start, end){
  return ipStringToDecimal(end) - ipStringToDecimal(start);
}

function ipStringToDecimal(ipString) {
  let binaryIP = '';
  ipString.split('.').forEach(octet => {
    binaryIP += parseInt(octet).toString(2).padStart(8, '0')
  });
  
  return parseInt(binaryIP, 2);
}