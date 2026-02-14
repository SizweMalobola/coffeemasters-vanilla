 const Router = {
    init: function(){
        // grab links
        const linkElements = document.querySelectorAll("a.navlink");
        // loop through all the a elements
        linkElements.forEach(a => {
            // add event listener 
            a.addEventListener("click", (event) => {
                event.preventDefault()
                // grab href or url
                const url = event.target.getAttribute("href")
                // nav to href
                this.goTo(url)
            })
        })
        // initialize current path / route 
        this.goTo(location.pathname)
       
    },
    // add a function to nav to path/href in my app
    goTo: function(path,addToHistory = true){
        // addToHistory is replace
        // addToHistory true == replace false
        console.log(` go to ${path}`)
    }
}

export default Router