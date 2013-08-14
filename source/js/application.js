// source: http://stackoverflow.com/a/15555947
function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}