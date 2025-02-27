class ToTop extends HTMLElement {
  constructor() {
    super();


    this.render();
  }

  render() {
    this.innerHTML = `<button id="scroll-to-top" title="Kembali ke Atas">↑</button>`;
  }
}

customElements.define('to-top', ToTop);