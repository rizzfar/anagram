const inputElement = document.getElementById('input-word');
const infoElement = document.getElementById('info');
const resultWordElement = document.getElementById('result-word');
const resultMeanElement = document.getElementById('result-mean');
const loadingSpinner = document.getElementById('loading-spinner');
const scrollToTopButton = document.getElementById('scroll-to-top');

loadingSpinner.style.display = 'none';

// PERMUTASI
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

const loadDictionary = async () => {
  try {
    const response = await fetch('dictionary.json');
    if (!response.ok) throw new Error('Gagal memuat kamus');
    const json = await response.json();
    return json.dictionary;
  } catch (error) {
    console.error('Error memuat kamus:', error);
    return [];
  }
};

const displayResults = (words, anagrams) => {
  resultWordElement.innerHTML = words.map((word) => `<a href="#${word}" class="result-link">${word}</a>`).join('');
  resultMeanElement.innerHTML = anagrams.map((entry) => `
    <div id="${entry.word.trim()}">
      <h3>${entry.word}</h3>
      <span>${new DOMParser().parseFromString(entry.arti, 'text/html').body.textContent}</span>
    </div>
  `).join('');
};

const findAnagram = async () => {
  const input = inputElement.value.toLowerCase().trim();
  inputElement.value = '';

  if (!input) { 
    infoElement.innerHTML = '<span style="color: red;">Masukkan kata terlebih dahulu!</span>';
    return;
  }

  loadingSpinner.style.display = 'flex';

  try {
    const permutations = new Set(permute(input));
    const dictionary = await loadDictionary();
    if (dictionary.length === 0) throw new Error('Kamus kosong atau gagal dimuat');

    const anagrams = dictionary.filter((entry) => permutations.has(entry.word.trim()) && entry.type === 1);
    const words = [...new Set(anagrams.map((entry) => entry.word.trim()))];

    if (words.length === 0) {
      infoElement.innerHTML = '<span style="color: red;">Kata tidak ditemukan dalam kamus!</span>';
      resultWordElement.innerHTML = '';
      resultMeanElement.innerHTML = '';
      resultMeanElement.style.display = 'none';
    } else {
      resultMeanElement.style.display = 'block';
      infoElement.innerHTML = `Ditemukan <b>${words.length}</b> dari <b>${permutations.size}</b> permutasi kata di dalam kamus`;
      displayResults(words, anagrams);
    }
  } catch (error) {
    console.error(error);
    infoElement.innerHTML = '<span style="color: red;">Terjadi kesalahan!</span>';
  } finally {
    loadingSpinner.style.display = 'none';
  }
};

// JAVASCRIPT UI
const toggleMode = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.querySelector('.toggle-mode').textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
};

const handleScroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
    scrollToTopButton.style.animation = 'fadeIn 0.3s';
  } else {
    scrollToTopButton.style.animation = 'fadeOut 0.3s';
    setTimeout(() => {
      scrollToTopButton.style.display = 'none';
    }, 300);
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.toggle-mode').textContent = '☀️ Light Mode';
  }
});

window.onscroll = handleScroll;
scrollToTopButton.addEventListener('click', scrollToTop);