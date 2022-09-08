const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connection');

const buildDB = () => {
  const buildSql = readFileSync(join(__dirname, 'buildDB.sql')).toString();
  return connection.query(buildSql);
};

module.exports = buildDB;
