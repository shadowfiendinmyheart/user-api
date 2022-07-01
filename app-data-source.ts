import { DataSource } from "typeorm";

const databaseConfig = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "example",
  database: "mydatabase",
  entities: [`${__dirname}/entity/*.js`],
  logging: true,
  synchronize: true,
});

export default databaseConfig;
