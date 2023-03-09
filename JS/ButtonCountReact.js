class ButtonCountReact extends HTMLElement{
    connectedCallback() {
        const btn = document.createElement('button');
        this.attachShadow({mode: 'open'}).appendChild(btn);
    }
}

customElements.define('button-count-react', ButtonCountReact);