import ClickActionController from "../controller/clickActionController";
import express from "express";

/**
 * @swagger
 * definitions:
 *
 *  Action:
 *      type: object
 *      required:
 *      - id
 *      - user_id
 *      - action_name
 *      - startTime
 *      properties:
 *          id:
 *              type: string
 *          user_id:
 *              type: string
 *          action_name:
 *              type: string
 *          startTime:
 *              type: string
 *
 */
let clickActionRouter = express.Router();
/**
 * @swagger
 * /actions:
 *  get:
 *      tags:
 *      - admin-portal
 *      summary: retrieve all admin-portal actions
 *      description: call to retrieve all log data of admin-portal action
 *      responses:
 *          200:
 *              description: ok
 */
clickActionRouter.get('/', (req, res) => {
    ClickActionController.getAction().then(actions => {
        res.json(actions);
    });
});

/**
 * @swagger
 * /actions/:
 *  post:
 *      tags:
 *      - admin-portal
 *      summary: record admin-portal action
 *      description: record event time, date and user id of admin-portal action
 *      parameters:
 *      - in: body
 *        name: clickAction
 *        schema:
 *          $ref: '#/definitions/Action'
 *      responses:
 *          200:
 *              description: ok
 */

clickActionRouter.post('/', (req, res) => {
    console.log('post action: ', req.body);
    ClickActionController.addAction(req.body)/*.then(response => {
        res.json(response);
    });*/
});

//to be made
/**
 * @swagger
 * /actions/users:
 *  get:
 *      tags:
 *      - admin-portal
 *      summary: get list of userId and their actions
 *      description: get list of userId and their actions
 *      responses:
 *          200:
 *              description: ok
 */
clickActionRouter.get('/users', (req, res) => {
    ClickActionController.getUsersWithActions().then(action_user => {
        res.json(action_user);
    });
});


export default clickActionRouter;
