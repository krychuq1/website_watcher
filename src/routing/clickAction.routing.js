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
 *      - startTime
 *      properties:
 *          id:
 *              type: string
 *          startTime:
 *              type: string
 *
 */
let eventsRouter = express.Router();
/**
 * @swagger
 * /actions:
 *  get:
 *      tags:
 *      - create_event
 *      summary: get all events
 *      description: call to retrieve all users
 *      responses:
 *          200:
 *              description: ok
 */
eventsRouter.get('/', (req, res) => {
    ClickActionController.getAction().then(events => {
        res.json(events);
    });
});

/**
 * @swagger
 * /actions:
 *  post:
 *      tags:
 *      - create_event
 *      summary: add event time and date
 *      description: add event time and date of create new event
 *      parameters:
 *      - in: body
 *        name: event
 *        schema:
 *          $ref: '#/definitions/Action'
 *      responses:
 *          200:
 *              description: ok
 */

eventsRouter.post('/', (req, res) => {
    ClickActionController.addAction(req).then(response => {
        res.json(response);
    });
});




/*
// trial
/!**
 * @swagger
 * /events/{id}/{coordinates}:
 *  post:
 *      tags:
 *      - event
 *      summary: add event
 *      description: register event id and coordinates
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *      - in: path
 *        name: coordinates
 *        schema:
 *          type: array
 *          items: integer
 *      responses:
 *          200:
 *              description: ok
 *!/
eventsRouter.post('/:id/:coordinates', (req, res) => {
    console.log('Parameter is: ', req.params.id, 'Location is: ', req.params.coordinates);
    EventsController.addEvent(req.params.id, req.params.coordinates).then(response => {
        res.json(response);
    });
});*/

export default eventsRouter;