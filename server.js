const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const whiskies = {
  auchriosk: {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 7.45
  },
  'balmenach 2006': {
    type: "Scotch",
    composition: "Single Malt",
    age: 8,
    vintage: 2006,
    percent: 46,
    origin: "Speyside",
    price: 6.30
  },
  "balvenie caribbean cask": {
    type: "Scotch",
    composition: "Single Malt",
    age: 14,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 6.70
  },
  balvenie : {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 5.75
  },
  "allt a bhainne": {
    type: "Scotch",
    composition: "Single Malt",
    age: 15,
    vintage: 2006,
    percent: 46,
    origin: "Speyside",
    price: 9.65
  },
  "aultmore": {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 46,
    origin: "Speyside",
    price: 6.80
  },
  "cardhu": {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 6.50
  },
  "glenfarclas 10": {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 5.75
  },
  "glenfarclas 21": {
    type: "Scotch",
    composition: "Single Malt",
    age: 21,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 12.35
  },
  bennrinnes: {
    type: "Scotch",
    composition: "Single Malt",
    age: 15,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 5.50
  },
  glenfiddich: {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 5.00
  },
  speyburn: {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 5.10
  },
  "macallan gold": {
    type: "Scotch",
    composition: "Single Malt",
    age: 21,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 6.30
  },
  "braeval 1995": {
    type: "Scotch",
    composition: "Single Malt",
    age: 8,
    vintage: 1995,
    percent: 46,
    origin: "Speyside",
    price: 9.30
  },
  glenlivet: {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 5.20
  },
  craigellachie: {
    type: "Scotch",
    composition: "Single Malt",
    age: 13,
    vintage: 'n/a',
    percent: 46,
    origin: "Speyside",
    price: 6.90
  },
  benromach: {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 57,
    origin: "Speyside",
    price: 5.60
  },
  'glen elgin': {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 6.00
  },
  'glen keith': {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 9.20
  },
  'glen moray': {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 5.60
  },
  benriach: {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 4.70
  },
  'glen spey': {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 6.80
  },
  glenburgie: {
    type: "Scotch",
    composition: "Single Malt",
    age: 7,
    vintage: 'n/a',
    percent: 48.4,
    origin: "Speyside",
    price: 5.35
  },
  glendullan: {
    type: "Scotch",
    composition: "Single Malt",
    age: 17,
    vintage: 'n/a',
    percent: 50,
    origin: "Speyside",
    price: 8.70
  },
  glenlossie: {
    type: "Scotch",
    composition: "Single Malt",
    age: 10,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 7.20
  },
  glentauchers: {
    type: "Scotch",
    composition: "Single Malt",
    age: 18,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 10.80
  },
  inchgower: {
    type: "Scotch",
    composition: "Single Malt",
    age: 14,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 7.20
  },
  kininvie: {
    type: "Scotch",
    composition: "Single Malt",
    age: 17,
    vintage: 'n/a',
    percent: 42.6,
    origin: "Speyside",
    price: 30.90
  },
  knockando: {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 4.90
  },
  linkwood: {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 7.50
  },
  "longmorn distiller's choice": {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 2004,
    percent: 40,
    origin: "Speyside",
    price: 6.00
  },
  "longmorn": {
    type: "Scotch",
    composition: "Single Malt",
    age: 18,
    vintage: 'n/a',
    percent: 48,
    origin: "Speyside",
    price: 9.40
  },
  'macduff old particular': {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 48.4,
    origin: "Speyside",
    price: 10.00
  },
  mannochmore: {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 7.20
  },
  miltonduff: {
    type: "Scotch",
    composition: "Single Malt",
    age: 17,
    vintage: 'n/a',
    percent: 54.8,
    origin: "Speyside",
    price: 8.30
  },
  'mortlach rare old': {
    type: "Scotch",
    composition: "Single Malt",
    age: 'n/a',
    vintage: 'n/a',
    percent: 43.4,
    origin: "Speyside",
    price: 8.00
  },
  singleton: {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 6.00
  },
  strathisila: {
    type: "Scotch",
    composition: "Single Malt",
    age: 15,
    vintage: 'n/a',
    percent: 56.4,
    origin: "Speyside",
    price: 15.20
  },
  tamdhu: {
    type: "Scotch",
    composition: "Single Malt",
    age: 12,
    vintage: 'n/a',
    percent: 43,
    origin: "Speyside",
    price: 4.90
  },
  'tamnavulin double cask': {
    type: "Scotch",
    composition: "Single Malt",
    age: 'n/a',
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 11.55
  },
  tomintoul: {
    type: "Scotch",
    composition: "Single Malt",
    age: 16,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 6.40
  },
  tormore: {
    type: "Scotch",
    composition: "Single Malt",
    age: 14,
    vintage: 'n/a',
    percent: 40,
    origin: "Speyside",
    price: 8.15
  },
  "buffalo trace": {
    type: "Bourbon",
    composition: "Single Malt",
    age: "6-8",
    percent: 40,
    origin: "Kentucky, USA",
    composition: ,
  },
  redbreast: {
    type: "Single Pot Still",
    composition: "Single Malt",
    age: "12",
    percent: 40,
    origin: "Ireland",
  },
  "Dry County": {
    type: "Superdry",
    composition: "n/a",
    age: "0",
    vintage: 'n/a',
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
