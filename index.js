const cors = require("cors");
const express = require("express");
const app = express();


const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/whoami", (req, res) => {
  const software = req.header("User-Agent");
  const ipaddress = req.ip;
  const language = req.header("Accept-Language");
  res.json({
    ipaddress,
    language,
    software,
  });
});


const listener = app.listen(PORT, () => {
  console.log("App listening on port " + listener.address().port);
})