export default class Router {

    constructor(_app) {
        this.app = _app
        this.routes = []
        this.current_route = {
            name: "root",
            url: "#"
        }

        this.hashchanged = this.hashchanged.bind(this)
        window.addEventListener("hashchange", this.hashchanged)
        window.addEventListener("DOMContentLoaded", this.hashchanged)
    }

    add_route(_name, _url) {
        this.routes.push({
            name: _name,
            url: _url
        })
    }

    hashchanged() {

        for (let i = 0; i < this.routes.length; i++) {
            if (this.routes[i].url == window.location.hash) {
                this.current_route = this.routes[i]
                break
            } else {
                this.current_route = {
                    name: "not-found",
                    url: "#404"
                }
            }
        }

        this.app.show_com(this.current_route)

    }
}