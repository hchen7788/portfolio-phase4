class ButtonCount extends HTMLElement{
    constructor(){
        //always call super() first in the constructor
        super();
        //attach the Shadow DOM to your web component to protect your scope
        this.attachShadow({ mode: 'open'});
        //add your content to the root of the Shadow DOM that was created
        this.shadowRoot.innerHTML = '<h1>web component</h1>';
    }
}

window.customElements.define('button-count', ButtonCount);