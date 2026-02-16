const Router = {
	init: function () {
		// grab links
		const linkElements = document.querySelectorAll("a.navlink");
		// loop through all the a elements
		linkElements.forEach((a) => {
			// add event listener
			a.addEventListener("click", (event) => {
				event.preventDefault();
				// grab href or url
				const url = event.target.getAttribute("href");
				// nav to href
				this.goTo(url);
			});
		});
		// initialize current path / route
		this.goTo("/");
		this.goTo(location.pathname);
		// add popState event handler for when thingy changes
		window.addEventListener("popstate", (event) => {
			// when url is changed
		});
	},
	// add a function to nav to path/href in my app
	goTo: (path, addToHistory = true) => {
		// addToHistory is replace
		// addToHistory true == replace false
		if (addToHistory) {
			history.pushState({ path }, "", path);
		}
		const mainEl = document.querySelector("main");
		let newEl = document.createElement("h1");
		switch (path) {
			case "/":
				newEl = document.createElement("menu-element");
				newEl.textContent = "menu";
				break;
			case "/order":
				newEl = document.createElement("order-element");
				newEl.textContent = "order now";
				break;
			default:
				if (path.startsWith("/product-")) {
					newEl = document.createElement("details-element");
					newEl.textContent = "Details";
					const paramId = path.substring(path.lastIndexOf("-") + 1);
					newEl.dataset.id = paramId;
				}
				break;
		}
		mainEl.innerHTML = "";
		mainEl.appendChild(newEl);
	},
};

export default Router;
