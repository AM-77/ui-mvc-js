export default class App {
    constructor(_root) {
        this.root = document.querySelector(_root)
        this.components = []

        this.show_comp = this.show_comp.bind(this)
    }

    add_comp(_comp) {
        this.components.push(_comp)
    }

    show_comp(_route) {

        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].id == _route.comp_id) {
                this.current_comp = this.components[i]
                break
            } else {
                this.current_comp = {
                    view() {
                        return `<h4>404 NOT FOUND</h4>`
                    }
                }
            }
        }

        this.current_comp.controller()
        this.update_html(this.current_comp)

    }

    update_html(_comp) {
        this.root.innerHTML = _comp.view()
    }

}