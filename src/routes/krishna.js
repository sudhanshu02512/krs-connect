/** Third-party packages */
import { Router } from "express";

/**Local modules (internal files) */
import { getPackageInfo } from "../utils/packageInfo.js";

/**Init Package Information */
const pkg = getPackageInfo();

/** Init Routing */
const router = Router();

/** Routing Configuration */
router.get("/", (req, res) => {
  let response = {
    status: "up",
    service: pkg.name,
    version: pkg.version,
    uptime: `${process.uptime().toFixed(2)} seconds`,
    timestamp: new Date().toISOString(),
    message: "Service is running smoothly 🚀",
    idol: "⭕‼️⭕",
    support: "In case of any issue please contact sudhanshu02512@gmail.com",
  };
  res.send(response);
});

/**Delayer*/
router.post("/delayer", (req, res) => {
  const time = req.body?.time;
  if (time) {
    setTimeout(() => {
      res.json({ message: `Response after ${time} ms` });
    }, time); 
  }
  else{
    res.json({ message: `Please provide time in ms in the request body` });
  }
});

export default router;
