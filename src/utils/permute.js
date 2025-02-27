const permute = (string) => {
  const results = [string];
  const chars = string.split('');
  const n = chars.length;
  const indices = Array.from({ length: n }, (_, i) => i);
  const cycles = Array.from({ length: n }, (_, i) => n - i);

  let i = 0;
  while (i < n) {
    cycles[i]--;
    if (cycles[i] === 0) {
      cycles[i] = n - i;
      i++;
    } else {
      const j = i + cycles[i];
      [indices[i], indices[j]] = [indices[j], indices[i]];
      results.push(indices.map((p) => chars[p]).join(''));
      i = 0;
    }
  }
  return results;
};

export default permute;