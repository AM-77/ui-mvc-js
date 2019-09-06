export default class Router {

    constructor(_app) {
        this.app = _app
        this.routes = []
        this.current_route = {
            comp_id: "root",
            url: "#"
        }

        this.hashchanged = this.hashchanged.bind(this)
        window.addEventListener("hashchange", this.hashchanged)
        window.addEventListener("DOMContentLoaded", this.hashchanged)
    }

    add_route(_comp_id, _url) {
        this.routes.push({
            comp_id: _comp_id,
            url: _url
        })
    }

    hashchanged() {

        for (let i = 0; i < this.routes.length; i++) {
            if (this.routes[i].url == window.location.hash || this.routes[i].url.slice(0, this.routes[i].url.indexOf("/")) == window.location.hash.slice(0, window.location.hash.indexOf("/"))) {
                this.current_route = this.routes[i]
                break
            } else {
                this.current_route = {
                    comp_id: "not-found",
                    url: "#404"
                }
            }
        }

        for (let i = 0; i < this.app.components.length; i++) {
            if (this.app.components[i].id == this.current_route.comp_id) {
                this.current_comp = this.app.components[i]
                break
            } else {
                this.current_comp = {
                    view() {
                        return `<h4>404 NOT FOUND</h4>`
                    },
                    controller() {}
                }
            }
        }

        if (this.current_route.url.indexOf("/")) {
            let property = this.current_route.url.slice(this.current_route.url.indexOf("/") + 1, )
            let value = window.location.hash.slice(window.location.hash.indexOf("/") + 1, )

            this.current_comp.controller(property, value)
        } else {
            this.current_comp.controller()
        }

        this.app.show_comp(this.current_comp)
    }
}