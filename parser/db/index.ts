require('dotenv').config();
const pgPromise = require('pg-promise')({
  capSQL: true
});

// pgPromise.pg.types.setTypeParser(20, BigInt);

const pgpConnection = pgPromise(process.env.PG_DATABASE_URL);

module.exports = {
  db: pgpConnection,
  pgp: pgPromise,
};
