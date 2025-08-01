import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();
app.use(express.json()); // alow json data sent in request
app.use(express.urlencoded({ extended: false})); // process the form data sent by html form in a simple format
app.use(cookieParser()); // reads cookies from incoming request to store user data


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.user(errorMiddleware);


app.get('/', (req, res) => {
    res.send('Welcome to the subscription reminder API!');
});

app.listen(PORT, async () => {
    console.log(`Subscription reminder API is running on http://localhost:${PORT}`);

    await connectToDatabase();
});

export default app;
