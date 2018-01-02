import express from 'express';

/**
 * @swagger
 * definitions:
 *  Brand:
 *      type: object
 *      required:
 *      - id
 *      - startTime
 *      properties:
 *          id:
 *              type: string
 *          startTime:
 *              type: string
 *
 */



let usersRouter = express.Router();

/**
 * @swagger
 * /users/:
 *  get:
 *      tags:
 *      - user
 *      summary: test api
 *      description: call to test api should return ok
 *      responses:
 *          200:
 *              description: ok
 */
usersRouter.get('/', (req, res) => {
   res.send('ok');
});
export default usersRouter;