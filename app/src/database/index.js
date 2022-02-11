const dotenv = require('dotenv');

dotenv.config();

const { Client } = require('pg');


const client = new Client({
  host: "postgres-mycontacts",
  port: 5432,
  user: "mycontacts",
  password: "Postgres2019!",
  database: "mycontacts",
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
