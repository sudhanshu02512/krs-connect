/** Third-party packages */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/**Local modules (internal files) */
import krishnaRoute from './routes/krishna.js';

/**Load environment variables */
dotenv.config();

/**Express App*/
const app = express();

/**Express Middlewares */
app.use(cors());
app.use(express.json());

/**Routes (AFTER middleware) */
app.use('/',krishnaRoute);

export default app;