const { singupSchema } = require('./validations');
const { DataBaseError } = require('./customErrors');

module.exports = {
  singupSchema,
  DataBaseError,
};
