export default class App {
    constructor(_root) {
        this.root = document.querySelector(_root)
        this.components = []

    }

    add_comp(_comp) {
        this.components[_comp.id] = _comp
    }

    show_comp() {

    }

    update_view() {

    }

}