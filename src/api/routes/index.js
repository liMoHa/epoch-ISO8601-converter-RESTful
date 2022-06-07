import express from "express";
import { convertFromEpochToISO8601 } from "../../service/convertFromEpochToISO8601.js";

const router = express.Router();

router.get("/:epoch", (req, res) => {
  try {
    const epoch = Number(req.params.epoch);
    const data = convertFromEpochToISO8601(epoch);
    res.json({
      status: 200,
      message: "OK",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Please enter a number",
      data: "null",
    });
  }
});

export { router };
