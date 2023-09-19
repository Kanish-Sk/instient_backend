const pool = require("../views/config/dbConfig");

const getCustomers = async () => {
  const connection = await pool.getConnection();
  try {
    const results = await connection.query("SELECT * FROM customers");
    return results[0];
  } finally {
    connection.release();
  }
};

exports.getCustomers = getCustomers;
