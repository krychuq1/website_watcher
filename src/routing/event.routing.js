import EventsController from "../controller/eventController";
import express from "express";
import usersRouter from "./users.routing";
import UserController from "../controller/userController";

/**
 * @swagger
 * definitions:
 *  Event:
 *      type: object
 *      required:
 *      - id
 *      - location
 *      properties:
 *          id:
 *              type: string
 *          location:
 *              type: array
 *              items: string
 *
 */
let eventsRouter = express.Router();
/**
 * @swagger
 * /events:
 *  get:
 *      tags:
 *      - event
 *      summary: get all events
 *      description: call to retrieve all users
 *      responses:
 *          200:
 *              description: ok
 */
usersRouter.get('/', (req, res) => {
    EventsController.getAllEvents().then(events => {
        res.json(events);
    });
});


/**
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
 */
eventsRouter.post('/:id/:coordinates', (req, res) => {
    console.log('Parameter is: ', req.params.id, 'Location is: ', req.params.coordinates);
    EventsController.addEvent(req.params.id, req.params.coordinates).then(response => {
        res.json(response);
    });
});



export default eventsRouter;