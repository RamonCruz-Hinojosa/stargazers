const env = process.env;

const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    waitForConnections: env.DB_CONN_WAIT,
    connectionLimit: env.DB_CONN_LIMIT,
    queueLimit: env.DB_QUE_LIMIT,
    debug: env.DB_DEBUG,
  },
  listPerPage: env.LIST_PER_PAGE,
};

module.exports = config;
