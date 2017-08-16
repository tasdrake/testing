function vowelCount(string) {
  if (typeof string !== 'string') return 'Please input a string';
  if (!string.length) return 'Please input a string';
  const obj = {};
  string.toLowerCase().split('').map(e => {
    const eChar = e.charCodeAt();
    if (eChar === 97) obj[e] = obj[e] + 1 || 1;
    if (eChar === 101) obj[e] = obj[e] + 1 || 1;
    if (eChar === 105) obj[e] = obj[e] + 1 || 1;
    if (eChar === 111) obj[e] = obj[e] + 1 || 1;
    if (eChar === 117) obj[e] = obj[e] + 1 || 1;
  });
  // return `${obj}`;
  // return JSON.stringify(obj)
  return obj;
}

module.exports = vowelCount;
