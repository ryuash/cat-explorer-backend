require('dotenv').config();

console.log('parser starts here');

// On start reset all block and tx that are `in_progress` back to incompete

// Start the cron jobs (so we don't need to deal with a web socket)
