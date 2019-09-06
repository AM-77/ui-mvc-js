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
                        return "<li><a href='#userid/"+ user.id +"'>" + user.name + "</a></li>"           
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
            }
        ]
    }
})


app.add_comp({
    id: "user-comp",
    model: {
        user: {}
    },
    view() {
        return `
        <div>
            <p><b>name</b>: ${this.model.user.name}</p>
            <p><b>username</b>: ${this.model.user.username}</p>
        </div>
        `;
    },
    controller(_property, _value) {

        let users = [{
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
                "address": {
                    "street": "Douglas Extension",
                    "suite": "Suite 847",
                    "city": "McKenziehaven",
                    "zipcode": "59590-4157",
                    "geo": {
                        "lat": "-68.6102",
                        "lng": "-47.0653"
                    }
                },
                "phone": "1-463-123-4447",
                "website": "ramiro.info",
                "company": {
                    "name": "Romaguera-Jacobson",
                    "catchPhrase": "Face to face bifurcated interface",
                    "bs": "e-enable strategic applications"
                }
            }
        ]

        console.log(_property);
        console.log(_value);

        for (let i = 0; i < users.length; i++) {
            if (users[i][_property] == _value) {
                this.model.user = users[i]
                break
            }
        }

    }
})

const router = new Router(app)
router.add_route("users-comp", "#users")
router.add_route("user-comp", "#userid/id")
router.add_route("user-comp", "#username/username")