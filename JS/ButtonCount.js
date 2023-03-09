class ButtonCount extends HTMLElement{
    constructor(){
        //always call super() first in the constructor
        super();
        //attach the Shadow DOM to your web component to protect your scope
        this.attachShadow({ mode: 'open'});
        //add your content to the root of the Shadow DOM that was created
        this.shadowRoot.innerHTML = '<h1>web component</h1>';

        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const btn = wrapper.appendChild(document.createElement("button"));
        // Take attribute content and put it inside the btn span
        btn.textContent = "Times Clicked: ";

        btn.setAttribute('counter', '0');
        let counter = btn.getAttribute("counter");
        console.log(counter)

        this.shadowRoot.append(wrapper);

    }
}

window.customElements.define('button-count', ButtonCount);