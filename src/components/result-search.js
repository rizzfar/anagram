class ResultSearch extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <p id="info"></p>
      <div id="result-word" style="margin-bottom: 1em"></div>
      <div id="result-mean"></div>
    `
  }
}

customElements.define('result-search', ResultSearch);