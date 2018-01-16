import EventModel from '../model/eventModel'
import GeoJSON from 'mongoose-geojson-schema';
import GoogleDistance from 'google-distance';
import GeoPoint from 'geopoint';
class EventController{
    constructor(){}

    addEvent(event){
        let eventObj = new EventModel({
            eventId: event.eventId,
            location: {
                type: "Point",
                coordinates: event.location
            }
        });
        // let eventObj = new EventModel(event);
        return eventObj.save().then(saved => {
            return saved
        })
    }
    getAllEvents(){
        return EventModel.find();
    }
    getDistance(location){
            //get all of events stored in mongo
            return EventModel.find().then(allEvent => {
                //create a new promise
                return new Promise((resolve, reject) => {
                    //array of promises
                    let promises = [];
                    //init empty array
                    let eventsWithDistance = [];
                    //loop through all of events
                    allEvent.forEach(obj => {
                        //location of the event
                        if(obj.location){
                            let eventLocation = obj.location.coordinates[0] + ',' + obj.location.coordinates[1];
                            //push promise to array
                            promises.push(this.getGoogleDistance(location, eventLocation, eventsWithDistance, obj))
                        }

                    });
                    Promise.all(promises).then(completed => {
                        console.log("we are done", eventsWithDistance);
                        resolve(eventsWithDistance)
                    })

                });


            });


    }
    //location, eventLocation, eventsWithDistance
    getGoogleDistance(location, eventLocation, eventsWithDistance, obj){
        return new Promise(function(resolve, reject){
            GoogleDistance.get(
                {
                    origin: location,
                    destination: eventLocation
                },
                function(err, data) {
                    if (err) return console.log(err);
                    let tempObj = {
                        eventId:  obj.eventId,
                        distance: data.distance
                    };
                    eventsWithDistance.push(tempObj);
                    resolve();
                });
        });
    }
    deleteAllEvents(){
        return EventModel.remove();
    }
    deleteEventByEventId(id){
        return EventModel.findOneAndRemove({eventId: id});
    }
    restoreEvents(events){
        return EventModel.create(events);
    }

}
const  eventController = new EventController();
export default eventController;