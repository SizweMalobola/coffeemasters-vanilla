import Store from "./services/Store.js"

// now how do we get the store to become global?
// well one way is to
// do this
window.app = Store 
// now the instance of Store will be available throughout the app through the windows global object

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded", window.app)
})