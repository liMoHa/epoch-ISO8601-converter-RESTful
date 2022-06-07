import express from "express";
import { router } from "./api/routes/index.js";

const app = express();

app.use("/", router);

app.use((req, res) => {
  res.status(404).json({ message: "Please check your URL" });
});

app.listen(5100);
