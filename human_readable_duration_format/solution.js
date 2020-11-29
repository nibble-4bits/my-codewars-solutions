function formatDuration (seconds) {
  if (seconds === 0) return 'now';

  const _years = Math.floor(seconds / 31536000),
        _days = Math.floor((seconds - (_years * 31536000)) / 86400),
        _hours = Math.floor((seconds - (_years * 31536000 + _days * 86400)) / 3600),
        _minutes = Math.floor((seconds - (_years * 31536000 + _days * 86400 + _hours * 3600)) / 60),
        _seconds = seconds % 60;
        
  const timeValObj = {years: _years,
                      days: _days,
                      hours: _hours,
                      minutes: _minutes,
                      seconds: _seconds};
  let durationStr = '';
  
  for (let key in timeValObj) {
    var timeVal = Math.floor(timeValObj[key]);
    if (timeVal > 0) {
      durationStr += `${timeVal} ${timeVal > 1 ? key : key.slice(0, key.length - 1)} `;
    }
  }
  
  durationStr = durationStr.trim()
  durationStr = durationStr.replace(/(?<=\d \w+) /g, ', ');
  let lastCommaIndex = durationStr.lastIndexOf(',');
  if (lastCommaIndex > -1) {
    durationStr = durationStr.slice(0, lastCommaIndex) + ' and' + durationStr.slice(lastCommaIndex + 1);
  }
  return durationStr;
}
