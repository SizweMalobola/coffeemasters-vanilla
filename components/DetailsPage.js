export class DetailsElement extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({ mode: "open" });

		async function loadStyles(root) {
			const res = await fetch("./components/DetailsPages.css");
			const styleTXT = await res.text();
			const styleElement = document.createElement("style");
			styleElement.textContent = styleTXT;
			root.appendChild(styleElement);
		}
		loadStyles(this.root);
	}

	connectedCallback() {
		const template = document.querySelector("#details-page-template");
		const content = template.content.cloneNode(true);
		this.root.appendChild(content);
	}
}
customElements.define("details-element", DetailsElement);
