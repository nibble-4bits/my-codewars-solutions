function int32ToIp(int32){
  let bitMask  = 0b11111111;
  
  let firstOctet = int32 >> 24 & bitMask;
  let secondOctet = int32 >> 16 & bitMask;
  let thirdOctet = int32 >> 8 & bitMask;
  let fourthOctet = int32 & bitMask;

  return `${firstOctet}.${secondOctet}.${thirdOctet}.${fourthOctet}`;
}