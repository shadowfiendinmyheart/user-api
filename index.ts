import express, { Express } from "express";
import { useExpressServer } from "routing-controllers";
import httpContext from "express-http-context";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import databaseConfig from "./app-data-source";
import { UserController } from "./controllers/user.controller";
import { GlobalErrorHandler } from "./middlewares/error.middleware";

dotenv.config();

databaseConfig
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app: Express = express();
app.use(httpContext.middleware);
app.use((req, res, next) => {
  httpContext.ns.bindEmitter(req);
  httpContext.ns.bindEmitter(res);
  next();
});
app.use(bodyParser.json());
app.use(express.static("public"));

useExpressServer(app, {
  controllers: [UserController],
  middlewares: [GlobalErrorHandler],
  defaultErrorHandler: false,
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
