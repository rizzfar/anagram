class LightdarkMode extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    this.querySelector('.toggle-mode').addEventListener('click', this.toggleMode);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      this.querySelector('.toggle-mode').textContent = '☀️ Light Mode';
    }
  }

  toggleMode = () => {
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    this.querySelector('.toggle-mode').textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  };

  render() {
    this.innerHTML = `
      <button class="toggle-mode">🌙 Dark Mode</button>
      <h1>Cari Anagram</h1>
    `;
  }
}

customElements.define('lightdark-mode', LightdarkMode);
