const { DataSource } = require("typeorm");
const { Product } = require("../models/Products");

require("reflect-metadata");

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "daniel",
    password: "1234",
    database: "tienda",
    entities:[Product]
});

module.exports = {AppDataSource}