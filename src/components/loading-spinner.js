class LoadingSpinner extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
       <div id="loading-spinner" class="hidden">
        <div class="spinner"></div>
        <p>Mencari anagram...</p>
      </div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner)