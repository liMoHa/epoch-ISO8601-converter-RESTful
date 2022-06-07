import express from "express";
import { router } from "./api/routes/index.js";

const app = express();

app.use("/", router);

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Please check your URL",
    data: "null",
  });
});

app.listen(5100);
