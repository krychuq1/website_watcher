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
 *          userMySqlIp:
 *              type: string
 *          city:
 *              type: string
 *          location:
 *              type: string
 *          organization:
 *              type: string
 *          region:
 *              type: string
 *          startTime:
 *              type: string
 *          endTime:
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

/**
 * @swagger
 * /users/{id}/{endtime}:
 *  put:
 *      tags:
 *      - user
 *      summary: update user
 *      description: this call will update user with endTime.
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *      - in: path
 *        name: endtime
 *        schema:
 *          type: string
        responses:
 *          200:
 *              description: ok
 */
usersRouter.put('/:id/:endtime', (req, res) => {
    UserController.addEndTime(req.params.id, req.params.endtime).then(updated => {
        res.send(updated);
    });
});

/**
 * @swagger
 * /users:
 *  delete:
 *      tags:
 *      - user
 *      summary: delete all users
 *      description: delete all users
 *      responses:
 *          200:
 *              description: ok
 */
usersRouter.delete('/', (req, res) => {
   UserController.deleteAllUsers().then(deleted => {
       res.json(deleted);
   })
});
/**
 * @swagger
 * /users/{ip}:
 *  delete:
 *      tags:
 *      - user
 *      summary: delete user based on ip
 *      description: this call will delete user based on ip
 *      parameters:
 *      - in: path
 *        name: ip
 *        schema:
 *          type: string
 *      responses:
 *          200:
 *              description: ok
 */
usersRouter.delete('/:ip', (req, res) => {
    UserController.deleteUserByIp(req.params.ip).then(response => {
        res.send(response);
    })
});
export default usersRouter;