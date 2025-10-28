const express = require('express');
const app = express();
const routes = require('./routes');
const logger = require('../logger');


const PORT = process.env.PORT || 3000;


// Main start log
logger.info('[MAIN] Starting');


app.use('/', routes);


const server = app.listen(PORT, () => {
logger.info(`[MAIN] Listening on port ${PORT}`);
console.log(`Server listening on http://localhost:${PORT}`);
});


// Graceful shutdown
function stop() {
logger.info('[MAIN] Stopping');
server.close(() => {
process.exit(0);
});
}


process.on('SIGINT', stop);
process.on('SIGTERM', stop);


module.exports = { app, server };