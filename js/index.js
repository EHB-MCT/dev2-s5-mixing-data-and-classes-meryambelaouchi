"use strict";

const app = {
    items: [],
    init() {},
    getData() {


        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10')
            .then(function (jokes) {
                return jokes.json();
            })
            .then(function (data) {
                console.log(data);
            });

        class jokes {
            constructor(category, setup, delivery) {
                this.category = category;
                this.setup = setup;
                this.delivery = delivery;

            }
        }
    },
    onSearch() {},
    render(message) {}

}
app.init();