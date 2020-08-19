import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import API from './src/routes/router'
require('dotenv').config()

//Configuration
    const PORT = process.env.PORT || 8000;
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    console.log('[SERVER] Helmet dressed');
//Routes Initialization
    app.use('/v1', API);
//Server Initialization
    app.listen(PORT, () => { console.log(`[SERVER] Running on port ${PORT}`) })