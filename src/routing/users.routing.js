import express from 'express';

let usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
   res.send('test ook');
});
export default usersRouter;