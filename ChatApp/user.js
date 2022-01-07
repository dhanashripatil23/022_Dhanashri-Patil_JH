const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
const { response } = require("express");
const { append } = require("express/lib/response");
const database = require("mime-db");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection successfull");
  await connection.endAsync();
}

async function addChat(chat) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("successfull");
  let sql = `insert into chat values(?)`;
  connection.queryAsync(sql, [chat.chat1]);
  await connection.endAsync();
  console.log("record added");
}

async function selectChat() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("successfull");
  let sql = `select * from chat`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
  console.log("record added");
}

const chat = { chat1: "hi" };
addChat(chat);
selectChat();
module.exports = { addChat, selectChat };
