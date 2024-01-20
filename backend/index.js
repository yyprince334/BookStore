import express from "express";
const app = express();
import cors from "cors";
const PORT = 3000;
import { connectdb } from "./mongodb.js";
import { router } from "./routes/bookRoutes.js";

app.use(cors());
app.use(express.json());

app.use("/", router);

connectdb();

app.listen(3000, () => {
  console.log(`listening on port: ${PORT}`);
});
