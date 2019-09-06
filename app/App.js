export default class App {
    constructor(_root) {
        this.root = document.querySelector(_root)
        this.components = []

        this.show_comp = this.show_comp.bind(this)
    }

    add_comp(_comp) {
        this.components.push(_comp)
    }

    show_comp(_comp) {
        this.root.innerHTML = _comp.view()
    }

}