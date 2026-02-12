import API from "./API.js"
import Store from "./Store.js"

export async function loadData() {
   const result = await API.fetchData()
    Store.menu = result
}
