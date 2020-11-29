function ipToInt32(ip){
  return parseInt(ip.split('.').map(octet => parseInt(octet).toString(2).padStart(8, '0')).join(''), 2)
}