const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/whoami", (req, res) => {
  const software = req.header("User-Agent");
  const ipaddress = req.connection.ipaddress;
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