const { DataSource } = require("typeorm");

require("reflect-metadata");

const AppDataSource = new DataSource({
    type: "mysql"
});