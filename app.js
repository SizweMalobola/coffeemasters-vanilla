import Store from "./services/Store.js"
import { loadData } from "./services/Menu.js"

// now how do we get the store to become global?
// well one way is to
// do this
window.app = Store 
// now the instance of Store will be available throughout the app through the windows global object

window.addEventListener("DOMContentLoaded", async () => {
    await loadData()
    console.log("DOMContentLoaded", window.app)
})