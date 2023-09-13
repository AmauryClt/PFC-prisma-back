import express from "express";
import router from "./router";
import cors from "cors";

const app = express();


app.use(express.json());
app.use(cors(
  {origin: process.env.FRONTEND_URL}
));
app.use(router);

const server = app.listen(process.env.APP_PORT, () =>
  console.log(`
🚀 Server ready at: process.env.APP_PORT
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);

//V1 fini