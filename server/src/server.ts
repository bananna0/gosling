/* app/server.ts */
import * as express from 'express';
import  { ContactController } from './api';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = 4200;

// Mount the WelcomeController at the /welcome route
app.use('/contacts', ContactController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});