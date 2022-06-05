import express from "express";
import { convertFromEpochToISO8601 } from "./service/convertFromEpochToISO8601.js";

const app = express();

app.get("/:epoch", (req, res) => {
  try {
    const epoch = Number(req.params.epoch);
    const ISO8601String = convertFromEpochToISO8601(epoch);
    const result = {
      status: res.statusCode,
      message: "OK",
      data: ISO8601String,
    };
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: "Please enter number" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Please check your URL" });
});

app.listen(5100);
