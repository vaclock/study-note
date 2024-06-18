class ImageBox extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'title', 'price'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const image = this.getAttribute('image');
        const title = this.getAttribute('title');
        const price = this.getAttribute('price');

        this.shadowRoot.innerHTML = `
            <div>
                <img src="${image}" style="width 200px;height: 200px;" alt="${title}">
                <p>${title}</p>
                <p>价格: ${price}</p>
            </div>
        `;
    }
}

customElements.define('image-box', ImageBox);
