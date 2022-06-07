import express from "express";
import { router } from "./api/routes/index.js";
import * as dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/", router);

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Please check your URL",
    data: "null",
  });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
