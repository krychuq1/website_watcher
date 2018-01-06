import express from 'express';
import UserController from '../controller/userController';

/**
 * @swagger
 * definitions:
 *  User:
 *      type: object
 *      required:
 *      - ip
 *      - city
 *      properties:
 *          ip:
 *              type: string
 *          city:
 *              type: string
 *
 */



let usersRouter = express.Router();

/**
 * @swagger
 * /users/test:
 *  get:
 *      tags:
 *      - user
 *      summary: test api
 *      description: call to test api should return ok
 *      responses:
 *          200:
 *              description: ok
 */
usersRouter.get('/test', (req, res) => {
   res.send('ok');
});

/**
 * @swagger
 * /users:
 *  get:
 *      tags:
 *      - user
 *      summary: get all users
 *      description: call to get all users
 *      responses:
 *          200:
 *              description: ok
 */
usersRouter.get('/', (req, res) => {
    UserController.getAllUsers().then(users => {
       res.json(users);
    });
});

/**
 * @swagger
 * /users/:
 *  post:
 *      tags:
 *      - user
 *      summary: add user ip
 *      description: this call will add ip to database.
 *      parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          $ref: '#/definitions/User'
 *      responses:
 *          200:
 *              description: ok
 */
usersRouter.post('/', (req, res) => {
    console.log(req.body);
    UserController.addUser(req.body).then(response => {
       res.json(response);
    });
});


export default usersRouter;