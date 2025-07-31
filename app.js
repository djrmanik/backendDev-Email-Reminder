import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the subscription reminder API!');
});

app.listen(3000, ()=> {
    console.log('Subscription reminder API is running on port 3000');
});

export default app;
