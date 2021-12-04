const db = require("../services/db");

async function list() {
  const data = await db.query(
    "SELECT id, post, author FROM post order by created_at desc"
  );
  const meta = { page: 1 };

  return {
    data,
    meta,
  };
}

async function get(req) {
  const data = await db.query(`SELECT * from post WHERE id = ${req.params.id}`);
  const meta = { page: 1 };

  return {
    data,
    meta,
  };
}

async function create(req) {
  const results = await db.query(
    `INSERT INTO post (post, author) values (?, ?) `,
    [req.body.post, req.body.author]
  );
  const meta = { page: 1 };
  const data = await db.query(
    `SELECT * from post WHERE id = ${results.insertId}`
  );

  return {
    data: data[0],
    meta,
  };
}

async function update() {
  const data = await db.query("SELECT ");
  const meta = { page: 1 };

  return {
    data,
    meta,
  };
}

// async function delete() {
//   const data = await db.query("SELECT ");
//   const meta = { page: 1 };

//   return {
//     data,
//     meta,
//   };
// }

module.exports = {
  list,
  get,
  update,
  create,
};
