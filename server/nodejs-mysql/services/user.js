const db = require("../services/db");
const bcrypt = require("bcrypt");
const { response } = require("express");
var jwt = require("jsonwebtoken");
const { update } = require("./post");

async function get(req) {
  const data = await db.query(`SELECT * from user WHERE id = ${req.params.id}`);
  const meta = { page: 1 };

  return {
    data,
    meta,
  };
}

async function login(req) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await db.query(
    `SELECT * from user WHERE username = '${username}' limit 1`
  );
  if (user.length === 0) {
    return {
      error: "incorrect username or password",
    };
  }
  const validPassword = await bcrypt.compare(password, user[0].password);
  if (!validPassword) {
    return {
      error: "incorrect username or password",
    };
  }
  // const token = jwt.sign(user[0], "update me");
  // return {
  //   data: token,
  // };
  return {
    data: user[0],
  };
}

async function create(req) {
  const salty = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(req.body.password, salty);
  const results = await db.query(
    `INSERT INTO user (username, password) values (?, ?) `,
    [req.body.username, pass]
  );
  const meta = { page: 1 };
  const data = await db.query(
    `SELECT * from user WHERE id = ${results.insertId}`
  );

  return {
    data: data[0],
    meta,
  };
}

module.exports = {
  get,
  create,
  login,
};
