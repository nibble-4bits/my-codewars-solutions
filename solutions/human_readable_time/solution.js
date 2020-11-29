function humanReadable(seconds) {
  let hh = Math.trunc(seconds / 3600).toString();
  let mm = Math.trunc((seconds % 3600) / 60).toString();
  let ss = Math.trunc((seconds % 3600) % 60).toString();
  
  return `${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:${ss.padStart(2, '0')}`;
}