const express = require("express");
const req = require("express/lib/request");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { addChat, selectChat } = require("./user.js");
app.get("/select", async (req, res) => {
  const list = await selectChat();
  res.json(list);
});

app.post("/add", async (req, res) => {
  const add1 = req.body;
  await addChat(add1);
  res.json("message added successfull");
});

app.listen(4002, () => console.log("server started"));
