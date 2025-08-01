import { Router } from 'express';

const authRouter = Router();

authRouter.post('/', (req, res) => res.send({ title: 'Sign Up' }));
authRouter.post('/', (req, res) => res.send({ title: 'Sign In' }));
authRouter.post('/', (req, res) => res.send({ title: 'Sign Out' }));

export default authRouter;