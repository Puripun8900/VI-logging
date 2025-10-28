const logger = require('../logger');


logger.log('info', '[MAIN] This is an informational message.');
logger.log('warn', '[MAIN] This is a warning message.');
logger.log('error', '[MAIN] This is an error message.');


logger.info('[MAIN] This is another informational message.');
logger.warn('[MAIN] This is another warning message.');
logger.error('[MAIN] This is another error message.');


console.log('Task 1 demo finished. Check logs/ for files.');