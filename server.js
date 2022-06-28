const express = require("express");
const app = express();
// const cors = require("cors");
const PORT = 8000;

// app.use(cors());

const whiskies = {
  "buffalo trace": {
    style: "Straight Bourbon",
    age: "6-8",
    percent: 40,
    origin: "Kentucky, USA",
  },
  redbreast: {
    style: "Single Pot Still",
    age: "12",
    percent: 40,
    origin: "Ireland",
  },
  "Dry County": {
    style: "Superdry",
    age: "0",
    percent: 0,
    origin: "Knowhere",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});

app.get("/api/:name", (req, res) => {
  const whiskeyName = req.params.name.toLowerCase();
  if (whiskies[whiskeyName]) {
    res.json(whiskies[whiskeyName]);
  } else {
    res.json(whiskies["Dry County"]);
  }
});
