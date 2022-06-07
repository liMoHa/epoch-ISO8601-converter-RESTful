import express from "express";
import { convertFromEpochToISO8601 } from "../../service/convertFromEpochToISO8601.js";

const router = express.Router();

router.get("/:epoch", (req, res) => {
    try {
      const epoch = Number(req.params.epoch);
      const data = convertFromEpochToISO8601(epoch);
      const result = {
        status: res.statusCode,
        message: "OK",
        data,
      };
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: "Please enter number" });
    }
});  

export {router};