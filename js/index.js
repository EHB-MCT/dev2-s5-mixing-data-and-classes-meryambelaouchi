"use strict";

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {


        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10')
            .then(function (response) {
                console.log(response);
                return response.json();
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