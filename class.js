class  MiComponenteJT extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
            <p>Star Trek</p>
        `;
    }
}

customElements.define('MiComponenteJT', MiComponenteJT);