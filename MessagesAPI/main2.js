const express = require("express");
const req = require("express/lib/request");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { addChat, selectChat } = require("./user2.js");
app.get("/selectmsg", async (req, res) => {
  const list = await selectChat();
  res.json(list);
});

app.listen(4005, () => console.log("server started"));
