import Store from "./services/Store.js"
import Router from "./services/Router.js"
import { loadData } from "./services/Menu.js"

// now how do we get the store to become global?
// well one way is to
// do this
window.app = {}
app.store = Store 
// add nav functions
app.router = Router
// now the instance of Store will be available throughout the app through the windows global object

window.addEventListener("DOMContentLoaded", async () => {
    await loadData()
    app.router.init()
})