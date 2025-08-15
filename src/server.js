/**Local modules (internal files) */
import app from './app.js';
import { logger } from './utils/logger.js';

/**Port Setting */
const PORT = process.env.PORT || 8010;

/**Listen Node Application Server */
app.listen(PORT,()=>{
    logger.success(`Server Started on ${PORT} port`);
})










