const pool = require("../views/config/dbConfig");

const getOrderByCustomer = async (customerId) => {
  const connection = await pool.getConnection();
  try {
    const results = await connection.query(
      "SELECT * FROM orders WHERE customer_id = ?",
      [customerId]
    );
    return results[0];
  } finally {
    connection.release();
  }
};

const getCustomerOrders = async () => {
  const connection = await pool.getConnection();
  try {
    const results = await connection.query(`
      SELECT
          c.name AS customer_name,
          COUNT(o.id) AS total_orders,
          SUM(o.amount) AS total_amount
      FROM
          customers c
      JOIN
          orders o ON c.id = o.customer_id
      GROUP BY
          c.country
      ORDER BY
          c.country
    `);
    return results[0];
  } finally {
    connection.release();
  }
};

exports.getOrderByCustomer = getOrderByCustomer;
exports.getCustomerOrders = getCustomerOrders;
