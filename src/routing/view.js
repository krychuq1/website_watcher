import express from 'express';

let viewRouter = express.Router();

viewRouter.get('/', (req, res) => {
   res.send('test ook');
});
export default viewRouter;