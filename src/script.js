import './components/search-form.js';
import './components/lightdark-mode.js';
import './components/loading-spinner.js';
import './components/result-search.js';
import './components/toTop.js';

const scrollToTopButton = document.getElementById('scroll-to-top');
const loadingSpinner = document.getElementById('loading-spinner')

loadingSpinner.style.display = 'none';
// JAVASCRIPT UI
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