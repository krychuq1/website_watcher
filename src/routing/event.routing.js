import express from 'express';
import EventController from '../controller/eventController';
import GeoPoint from 'geopoint';
import GoogleDistance from 'google-distance';
/**
 * @swagger
 * definitions:
 *  Event:
 *      type: object
 *      required:
 *      - eventId
 *      - location
 *      properties:
 *          eventId:
 *              type: number
 *          location:
 *              type: object
 *          properties:
 *              lat:
 *                  type: string
 *              lng:
 *                  type: string
 */

let eventRouter = express.Router();

/**
 * @swagger
 * /events:
 *  get:
 *      tags:
 *      - event
 *      summary: get all events
 *      description: call to get all events
 *      responses:
 *          200:
 *              description: ok
 */
eventRouter.get('/', (req, res) => {
    EventController.getAllEvents().then(events => {
        res.json(events);
    });
});

/**
 * @swagger
 * /events:
 *  post:
 *      tags:
 *      - event
 *      summary: add event with coordinates
 *      description: add event with coordinates
 *      parameters:
 *      - in: body
 *        name: event
 *        schema:
 *          $ref: '#/definitions/Event'
 *      responses:
 *          200:
 *              description: ok
 */
eventRouter.post('/', (req, res) => {
    EventController.addEvent(req.body).then(saved => {
        res.json(saved);
    })
});

/**
 * @swagger
 * /events:
 *  delete:
 *      tags:
 *      - event
 *      summary: delete all of the events
 *      description: delete event based on eventId
 *      responses:
 *          200:
 *              description: ok
 */
eventRouter.delete('/', (req, res) => {
    EventController.deleteAllEvents().then(deleted => {
        res.json(deleted);
    })
});

/**
 * @swagger
 * /events/distance/{lan}/{lng}:
 *  get:
 *      tags:
 *      - event
 *      summary: get all events and distance
 *      description: this call will show distance to the events based on user location
 *      parameters:
 *      - in: path
 *        name: lan
 *        schema:
 *          type: number
 *      - in: path
 *        name: lng
 *        schema:
 *          type: number
 *      responses:
 *          200:
 *              description: ok
 */
eventRouter.get('/distance/:lan/:lng', (req, res) => {
    let location = req.params.lan +','+req.params.lng;
    EventController.getDistance(location).then(distance => {
        res.json(distance);

    });

});
/**
 * @swagger
 * /events/{id}:
 *  delete:
 *      tags:
 *      - event
 *      summary: delete event based on eventId
 *      description: delete event based on eventId
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *      responses:
 *          200:
 *              description: ok
 */
eventRouter.delete('/:id', (req, res) => {
    EventController.deleteEventByEventId(req.params.id).then(saved => {
        res.json(saved);
    }).catch(err => {
        console.log(err);
    })
});

export default eventRouter;