require("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require("./controller");

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(db => {
        app.set("db", db);
        console.log('db connected');
    })
    .catch(err => console.log(err));

app.use(express.json());

app.post('/api/product', controller.create);
app.get('/api/inventory/:id', controller.getOne);
app.get('/api/inventory', controller.getProductInventory);
app.put('/api/inventory/:id', controller.update);
app.delete('/api/inventory/:id', controller.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
});