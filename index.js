import App from "./app/App.js"
import Router from "./app/Router.js"

const app = new App("#root")

app.add_comp({
    id: "users-comp",
    model: {
        users: []
    },
    view() {
        return `<ul>
                    ${this.model.users.map((user) => {
                        return "<li>" + user.name + "</li>"           
                    }).join("")}
                </ul>`;
    },
    controller() {
        this.model.users = [{
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
            },
            {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
            },
            {
                "id": 5,
                "name": "Chelsey Dietrich",
                "username": "Kamren",
            },
            {
                "id": 6,
                "name": "Mrs. Dennis Schulist",
                "username": "Leopoldo_Corkery",
            },
            {
                "id": 7,
                "name": "Kurtis Weissnat",
                "username": "Elwyn.Skiles",
            },
            {
                "id": 8,
                "name": "Nicholas Runolfsdottir V",
                "username": "Maxime_Nienow",
            },
            {
                "id": 9,
                "name": "Glenna Reichert",
                "username": "Delphine",
            },
            {
                "id": 10,
                "name": "Clementina DuBuque",
                "username": "Moriah.Stanton",
            }
        ]
    }
})


app.add_comp({
    id: "user-comp",
    model: {
        user: [{
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
        }]
    },
    view() {
        return `
        <div>
            <p><b>name</b>: ${this.model.user.name}</p>
            <p><b>username</b>: ${this.model.user.username}</p>
        </div>
        `;
    }
})

const router = new Router(app)
router.add_route("users-comp", "#users")
router.add_route("user-comp", "#user-{id}")