import displayResults from "../utils/displayResult.js";
import permute from "../utils/permute.js";
import loadDictionary from "../utils/loadDictionary.js";

class SearchForm extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  connectedCallback() {
    this.querySelector('#findanagram').addEventListener('click', this.findAnagram)
  }

  findAnagram = async () => {
    const inputElement = document.getElementById('input-word');
    const infoElement = document.getElementById('info');
    const loadingSpinner = document.getElementById('loading-spinner');
    const resultMeanElement = document.getElementById('result-mean');

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

  render() {
    this.innerHTML = `
      <input type="text" id="input-word" placeholder="Masukkan kata..." autocomplete="off"/>
      <button id="findanagram">Cari Anagram</button>
    `;
  }
}

customElements.define('search-form', SearchForm);