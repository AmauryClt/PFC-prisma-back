import express from "express";
import router from "./router";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors(
  {origin: "http://localhost:5173"}
));
app.use(router);

const server = app.listen(5000, () =>
  console.log(`
🚀 Server ready at: http://localhost:5000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);

//V1 fini