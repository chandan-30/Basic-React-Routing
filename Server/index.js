const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

const cities = [
    {
        id: 1,
        name: "New York",
    },
    {
        id: 2,
        name: "Berlin",
    },
    {
    id: 3,
    name: "London",
    },
];

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/cities", (req,res) => {
    res.json(cities);
});

app.post('/addname', (req, res) => {
    const body = req.body;
    console.log(body);
    return res.send('Success');
})

app.listen( port, () => {
    console.log("Sever is up and running !!");
});