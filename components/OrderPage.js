export class OrderElement extends HTMLElement {
	constructor() {
		super();
		// attact shadow dom to custom element
		this.root = this.attachShadow({ mode: "open" });
		// now that the root property has been created I can use it to attach dom specific styles
		async function loadStyles(root) {
			const res = await fetch("./components/OrderPage.css");
			const styleTXT = await res.text();
			const styleElement = document.createElement("style");
			styleElement.textContent = styleTXT;
			root.appendChild(styleElement);
		}
		loadStyles(this.root);
	}
	// kinda like on mount
	connectedCallback() {
		//grab template
		const templateElement = document.querySelector("#product-item-template");
		// to use a template in any way it has to be cloned
		const content = templateElement.content.cloneNode(true);
		this.root.appendChild(content);
	}
}
customElements.define("order-element", OrderElement);
