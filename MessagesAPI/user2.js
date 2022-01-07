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

async function selectChat() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("successfull");
  let sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
  console.log("record added");
}

//const chat = { chat1: "nice to meet you", chat2: "had you dinner?" };
//addChat(chat);
selectChat();
module.exports = { selectChat };
