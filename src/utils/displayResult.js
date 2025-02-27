const displayResults = (words, anagrams) => {
  const resultWordElement = document.getElementById('result-word');
  const resultMeanElement = document.getElementById('result-mean');

  resultWordElement.innerHTML = words.map((word) => `<a href="#${word}" class="result-link">${word}</a>`).join('');
  resultMeanElement.innerHTML = anagrams.map((entry) => `
    <div id="${entry.word.trim()}">
      <h3>${entry.word}</h3>
      <span>${new DOMParser().parseFromString(entry.arti, 'text/html').body.textContent}</span>
    </div>
  `).join('');
};

export default displayResults;