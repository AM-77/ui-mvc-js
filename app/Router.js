export default class Router {

    constructor(_app) {
        this._app = _app
        this._routes = []
        this._current_route = "/"

        this.hashchanged = this.hashchanged.bind(this)
        window.addEventListener("hashchange", this.hashchanged)
    }

    add_route(_url) {
        this._routes.push(_url)
    }

    hashchanged() {



        for (let i = 0; i < this._routes.length; i++) {
            console.log(this._routes[i])
            if (this._routes[i] == window.location.hash) {
                this._current_route = this._routes[i]
                break
            } else {
                this._current_route = ""
            }
        }


        if (this._current_route === "")
            this._current_route = "#404"


        console.log(this._current_route);

    }
}