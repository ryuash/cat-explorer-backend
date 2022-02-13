// const axios = require('axios');
// const R = require('ramda');
const db = require("@db");
// const db = require('../db');

module.exports = async () => {
  try {
    // get latest block
    const latestBlock = 10;

    // get latest in table
    const latestBlockInTable = await db.query('SELECT height FROM block ORDER BY height DESC LIMIT 1');

    // fill the in-between
    console.log(latestBlockInTable,'whats this');
  } catch (error) {
    console.log(error,'error')
  }
}
